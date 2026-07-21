import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  validateContactForm,
  hasValidationErrors,
  type ContactFormData,
} from "@/lib/contact-validation";
import { getSmtpConfig, getMissingSmtpEnvVars } from "@/lib/smtp";
import { escapeHtml } from "@/lib/escape-html";

export const runtime = "nodejs";

function parseContactBody(body: unknown): ContactFormData & {
  website?: string;
  brandName?: string;
  contactNo?: string;
} {
  if (!body || typeof body !== "object") {
    return { name: "", email: "", subject: "", message: "" };
  }

  const record = body as Record<string, unknown>;

  return {
    name: typeof record.name === "string" ? record.name : "",
    email: typeof record.email === "string" ? record.email : "",
    subject: typeof record.subject === "string" ? record.subject : "",
    message: typeof record.message === "string" ? record.message : "",
    website: typeof record.website === "string" ? record.website : "",
    brandName: typeof record.brandName === "string" ? record.brandName : "",
    contactNo: typeof record.contactNo === "string" ? record.contactNo : "",
  };
}

function buildMessageBody(
  message: string,
  brandName?: string,
  contactNo?: string,
): string {
  const details: string[] = [];

  if (brandName?.trim()) {
    details.push(`Brand Name: ${brandName.trim()}`);
  }
  if (contactNo?.trim()) {
    details.push(`Contact No: ${contactNo.trim()}`);
  }

  if (details.length === 0) {
    return message;
  }

  return `${details.join("\n")}\n\n${message}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { website, brandName, contactNo, ...formData } = parseContactBody(body);

    if (website?.trim()) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    }

    const errors = validateContactForm(formData);
    if (hasValidationErrors(errors)) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const smtp = getSmtpConfig();
    if (!smtp) {
      const missing = getMissingSmtpEnvVars();
      console.error("Contact API: missing or invalid SMTP environment variables:", missing);
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured. Please try again later.",
        },
        { status: 503 },
      );
    }

    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: buildMessageBody(
        formData.message.trim(),
        brandName,
        contactNo,
      ),
    };

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.port === 465,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
      ...(smtp.port === 587 && { requireTLS: true }),
    });

    await transporter.verify();

    await transporter.sendMail({
      from: smtp.from,
      to: smtp.contactEmail,
      replyTo: trimmed.email,
      subject: `[Contact Form] ${trimmed.subject}`,
      text: [
        `Name: ${trimmed.name}`,
        `Email: ${trimmed.email}`,
        `Subject: ${trimmed.subject}`,
        "",
        "Message:",
        trimmed.message,
      ].join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(trimmed.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmed.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(trimmed.subject)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmed.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 },
    );
  }
}

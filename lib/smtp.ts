export type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  contactEmail: string;
};

export function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!host || !port || !user || !pass || !from || !contactEmail) {
    return null;
  }

  const parsedPort = Number(port);
  if (!Number.isFinite(parsedPort) || parsedPort <= 0) {
    return null;
  }

  return {
    host,
    port: parsedPort,
    user,
    pass,
    from,
    contactEmail,
  };
}

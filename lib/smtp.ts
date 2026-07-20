export type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  contactEmail: string;
};

const PLACEHOLDER_VALUES = new Set([
  "",
  "your-email@gmail.com",
  "your-app-password",
  "replace_with_your_gmail_app_password",
]);

function readEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) return "";
  if (PLACEHOLDER_VALUES.has(value.toLowerCase())) return "";
  return value;
}

export function getSmtpConfig(): SmtpConfig | null {
  const host = readEnv("SMTP_HOST");
  const port = readEnv("SMTP_PORT");
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const from = readEnv("SMTP_FROM");
  const contactEmail = readEnv("CONTACT_EMAIL");

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

export function getMissingSmtpEnvVars(): string[] {
  const required = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "SMTP_FROM",
    "CONTACT_EMAIL",
  ] as const;

  return required.filter((name) => !readEnv(name));
}

export type EmailPayload = {
  name: string;
  email: string;
  message: string;
};

const encode = (value: string) => {
  if (typeof window === "undefined") {
    return Buffer.from(value).toString("base64");
  }
  return btoa(value);
};

export async function sendEmail(
  payload: EmailPayload
): Promise<{ success: boolean; messageId: string }> {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const messageId = encode(`${payload.email}-${Date.now()}`);
  return { success: true, messageId };
}


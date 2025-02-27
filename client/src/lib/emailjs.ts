import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "default_service";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "default_template";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "default_key";

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(params: EmailParams) {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: "muzzammilkhan7890@gmail.com",
        from_name: params.name,
        from_email: params.email,
        message: params.message,
      },
      PUBLIC_KEY
    );
    return result;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
}

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "npm:nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    const transporter = new SmtpClient({
      host: Deno.env.get("SMTP_HOST"),
      port: parseInt(Deno.env.get("SMTP_PORT") || "587"),
      secure: false,
      auth: {
        user: Deno.env.get("SMTP_USER"),
        pass: Deno.env.get("SMTP_PASS"),
      },
    });

    const emailContent = `
      Nouvelle demande de contact:
      
      Nom: ${formData.name}
      Email: ${formData.email}
      ${formData.company ? `Entreprise: ${formData.company}\n` : ''}
      ${formData.phone ? `Téléphone: ${formData.phone}\n` : ''}
      
      Message:
      ${formData.message}
    `;

    await transporter.sendMail({
      from: Deno.env.get("SMTP_USER"),
      to: "melbeperf@gmail.com",
      subject: `Nouveau contact de ${formData.name}`,
      text: emailContent,
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
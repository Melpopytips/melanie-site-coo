import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // obligatoire si pas déjà présent

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const verifyRecaptcha = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await res.json();
  console.log("🔍 Vérification reCAPTCHA :", data);
  return data.success && data.score >= 0.5; // ajustable selon seuil
};

app.post('/send', async (req, res) => {
  const { name, email, message, company = '', phone = '', captchaToken } = req.body;

  // 1️⃣ Vérification reCAPTCHA
  const isHuman = await verifyRecaptcha(captchaToken);
  if (!isHuman) {
    console.warn("⛔ reCAPTCHA non valide");
    return res.status(403).json({ error: "Échec de vérification reCAPTCHA" });
  }

  // 2️⃣ Configuration de l’envoi d’e-mail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulaire Mélanie" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📩 Nouveau message de contact de ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2 style="color: #0066cc;">Nouveau message reçu depuis le formulaire de contact</h2>
        <p><strong>👤 Nom :</strong> ${name}</p>
        <p><strong>🏢 Entreprise :</strong> ${company || 'Non précisé'}</p>
        <p><strong>📧 Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>📞 Téléphone :</strong> ${phone || 'Non précisé'}</p>
        <hr style="margin: 20px 0;" />
        <p><strong>💬 Message :</strong></p>
        <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0066cc;">
          ${message.replace(/\n/g, '<br />')}
        </p>
        <hr style="margin: 30px 0;" />
        <p style="font-size: 13px; color: #999;">
          Ce message a été généré automatiquement par votre site web personnel 💼
        </p>
      </div>
      `
    });

    res.status(200).json({ message: 'Email envoyé ✅' });
  } catch (error) {
    console.error("Erreur d’envoi :", error);
    res.status(500).json({ error: 'Erreur lors de l’envoi du mail ❌' });
  }
});

app.listen(3001, () => console.log('✅ Serveur mail en écoute sur le port 3001'));

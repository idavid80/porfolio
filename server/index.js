// server/index.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

    console.log('user', process.env.GMAIL_USER, process.env.GMAIL_PASS,)
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: "Todos los campos son obligatorios." });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    const LOGO_ = './logo.png'
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "Nuevo mensaje del formulario web",
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <div style="background-color: #02778bff; padding: 20px; text-align: center; border-bottom: 1px solid #e0e0e0;">
            ${LOGO_ ? `<img src="cid:logo" alt="Logotipo de tu empresa" style="max-width: 150px; border-radius: 50%; height: auto; display: block; margin: 0 auto;">` : ''}
            <h2 style="color: #333; margin-top: 15px; margin-bottom: 0; color: #FeFeFe">¡Nuevo Mensaje Recibido!</h2>
          </div>
          <div style="padding: 20px; line-height: 1.6; color: #555;">
            <p>Has recibido un nuevo mensaje a través de tu formulario de contacto web.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px dashed #eee; font-weight: bold; width: 30%;">Nombre:</td>
                <td style="padding: 8px 0; border-bottom: 1px dashed #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px dashed #eee; font-weight: bold;">Correo electrónico:</td>
                <td style="padding: 8px 0; border-bottom: 1px dashed #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Mensaje:</td>
                <td style="padding: 8px 0;"><pre style="white-space: pre-wrap; word-wrap: break-word; margin: 0;">${message}</pre></td>
              </tr>
            </table>
            <p style="margin-top: 25px; font-size: 0.9em; color: #777; text-align: center;">
              Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
            </p>
          </div>
          <div style="background-color: #f8f8f8; padding: 15px; text-align: center; font-size: 0.8em; color: #999; border-top: 1px solid #e0e0e0;">
            © 2025 iDavid80. Todos los derechos reservados.
          </div>
        </div>
      `,  attachments: [
    {
      filename: 'logo.png',
      path: './logo.png', // ruta relativa a tu server/index.js
      cid: 'logo'         // mismo ID que en el src
    }]
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar el mensaje." });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

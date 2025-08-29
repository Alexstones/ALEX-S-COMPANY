import nodemailer from "nodemailer";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { env } from "$env/dynamic/private"; // lee variables de .env en el servidor

// Transporter SMTP (se crea 1 vez y se reutiliza)
const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT ?? 587),
  secure: Number(env.SMTP_PORT ?? 587) === 465, // true para 465 (SSL)
  auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
});

// (Opcional) Verificar conexión SMTP al iniciar (no bloqueante)
transporter.verify().then(
  () => console.log("✅ SMTP listo para enviar."),
  (err) => console.error("❌ Error SMTP:", err?.message)
);

// Utilidad simple para escapar HTML
function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Maneja POST /api/lead
export const POST: RequestHandler = async ({ request }) => {
  try {
    const { nombre, email, tipo, mensaje, origen, whatsapp } = await request.json();
    if (!nombre || !email) {
      return json({ ok: false, error: "Faltan nombre o email." }, { status: 400 });
    }

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
        <h2>Nuevo lead</h2>
        <p><b>Nombre:</b> ${escapeHtml(nombre)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Tipo:</b> ${escapeHtml(tipo || "")}</p>
        <p><b>Mensaje:</b> ${mensaje ? escapeHtml(mensaje) : "-"}</p>
        <p><b>Origen:</b> ${escapeHtml(origen || "-")}</p>
        <p><b>WhatsApp:</b> <a href="${whatsapp}">${whatsapp}</a></p>
        <hr/>
        <p>Responde a este correo para contactar al cliente.</p>
      </div>
    `;

    await transporter.sendMail({
      to: env.MAIL_TO ?? "contacto@alexstechnology.com",
      from: env.MAIL_FROM ?? "ALEX'S TECHNOLOGY <no-reply@alexstechnology.com>",
      subject: `Nuevo lead: ${nombre} (${tipo || "sin tipo"})`,
      replyTo: email,
      html
    });

    return json({ ok: true });
  } catch (err) {
    console.error("❌ Email error:", err);
    return json({ ok: false }, { status: 500 });
  }
};

/* (Solo si tu frontend y API estuvieran en dominios distintos, habilita CORS)
export const OPTIONS: RequestHandler = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://tu-dominio.com",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "content-type"
    }
  });
};
*/

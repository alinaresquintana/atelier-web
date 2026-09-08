const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = process.env.FROM_EMAIL || 'Atelier Arte Vich <info@atelierartvich.com>';
const REPLY_TO_ADDRESS = 'info@atelierartvich.com';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const { to, subject, html, text, attachments } = JSON.parse(event.body);

    if (!to || !subject) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan parámetros requeridos (to, subject)' }),
      };
    }

    const payload = {
      from: FROM_ADDRESS,
      reply_to: REPLY_TO_ADDRESS,
      to: Array.isArray(to) ? to : [to],
      subject: subject,
      html: html || `<div style="font-family: sans-serif; font-size: 14px; line-height: 1.6;">${(text || '').replace(/\n/g, '<br>')}</div>`,
      text: text || ''
    };

    // 📎 ADJUNTO REAL DE FICHEROS
    // Resend acepta: [{ filename: 'Factura_FAC-123.pdf', path: 'https://...url-publica-supabase...' }]
    if (attachments && Array.isArray(attachments) && attachments.length > 0) {
      payload.attachments = attachments.map(att => ({
        filename: att.filename,
        path: att.path // Resend descarga el PDF de la URL y lo adjunta físicamente al mail
      }));
    }

    const data = await resend.emails.send(payload);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Email enviado con éxito con adjunto', data }),
    };
  } catch (error) {
    console.error('Error enviando email vía Resend:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Error en el servidor de correo' }),
    };
  }
};

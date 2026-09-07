const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Permitir únicamente peticiones POST
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method Not Allowed' }) 
    };
  }

  try {
    // 1. Aquí se extraen 'subject' y 'text' del cuerpo que envía el panel de administración
    const { to, subject, text } = JSON.parse(event.body);

    if (!to || !subject || !text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan parámetros requeridos (to, subject, text)' }),
      };
    }

    // Convertir saltos de línea a HTML para que el correo mantenga el formato
    const htmlBody = text.replace(/\n/g, '<br>');

    // 2. Aquí se envían 'subject' y 'text' al servicio de Resend
    const data = await resend.emails.send({
      from: 'Atelier de Eloísa <contacto@tudominio.ch>', // Sustituye tudominio.ch por tu dominio configurado
      to: [to],
      subject: subject, // <--- Asunto dinámico recibido del panel
      text: text,       // <--- Versión en texto plano recibida del panel
      html: `<div style="font-family: sans-serif; font-size: 14px; color: #333; line-height: 1.6;">${htmlBody}</div>`,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Email enviado con éxito', data }),
    };
  } catch (error) {
    console.error('Error enviando email:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Error al procesar el envío' }),
    };
  }
};

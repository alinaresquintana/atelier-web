const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method Not Allowed' }) 
    };
  }

  try {
    const { to, subject, text } = JSON.parse(event.body);

    if (!to || !subject || !text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan parámetros requeridos' }),
      };
    }

    const htmlBody = text.replace(/\n/g, '<br>');

    const data = await resend.emails.send({
      from: 'Atelier de Eloísa <onboarding@resend.dev>', // <--- Dirección temporal sin configurar DNS
      to: [to],
      subject: subject,
      text: text,
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

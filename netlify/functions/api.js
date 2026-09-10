const { createClient } = require('@supabase/supabase-js');

// Inicializamos Supabase en el servidor usando la clave secreta (Service Role)
const supabaseAdmin = createClient(
  'https://alfkqkzsurazgrttokso.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

exports.handler = async (event, context) => {
  // 1. Capturar el token de la cabecera HTTP enviada por el frontend
  const authHeader = event.headers.authorization || event.headers.Authorization || '';
  if (authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    // Inyectamos el token en el contexto para que Netlify Identity lo reconozca
    if (context.clientContext) {
      context.clientContext.custom = { ...(context.clientContext.custom || {}), token };
    }
  }

  // 2. Verificar que el usuario esté autenticado en Netlify Identity
  const { user } = context.clientContext || {};
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'No autorizado. Se requiere iniciar sesión.' }),
    };
  }

  try {
    const { action, table, data, query } = JSON.parse(event.body || '{}');

    let response;

    // 3. Ejecutar la operación solicitada en Supabase de forma segura
    if (action === 'select') {
      let q = supabaseAdmin.from(table).select(query || '*');
      response = await q;
    } else if (action === 'upsert') {
      response = await supabaseAdmin.from(table).upsert(data);
    } else if (action === 'delete') {
      response = await supabaseAdmin.from(table).delete().match(data);
    } else {
      return { statusCode: 400, body: JSON.stringify({ error: 'Acción no válida' }) };
    }

    if (response.error) throw response.error;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: response.data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
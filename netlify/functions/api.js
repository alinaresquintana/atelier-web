const { createClient } = require('@supabase/supabase-js');

// Inicializamos Supabase en el servidor usando la clave secreta (Service Role)
const supabaseAdmin = createClient(
  'https://alfkqkzsurazgrttokso.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

exports.handler = async (event, context) => {
  try {
    const { action, table, data, query } = JSON.parse(event.body || '{}');

    let response;

    // Ejecutar la operación solicitada en Supabase de forma segura con privilegios de servidor
    if (action === 'select') {
      let q = supabaseAdmin.from(table).select(query || '*');
      response = await q;
    } else if (action === 'upsert') {
      response = await supabaseAdmin.from(table).upsert(data);
    } else if (action === 'delete') {
      response = await supabaseAdmin.from(table).delete().match(data);
    } else {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Acción no válida' })
      };
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
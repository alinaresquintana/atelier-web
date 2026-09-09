import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://alfkqkzsurazgrttokso.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; // Clave de servicio de Supabase

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export default async (req) => {
  try {
    const today = new Date();
    const yearMonth = today.toISOString().substring(0, 7); // "2026-10"
    const issueDate = `${yearMonth}-01`;

    const invoiceRef = `ALQ-PAUL-${yearMonth}`;
    const concept = `Alquiler espacio con Paul - ${yearMonth}`;
    const amount = 480.00;

    // 1. Comprobar si ya se generó el gasto este mes para evitar duplicados
    const { data: existing } = await supabase
      .from('ledger')
      .select('id')
      .eq('invoice_ref', invoiceRef)
      .single();

    if (existing) {
      console.log(`El gasto de alquiler para ${yearMonth} ya fue generado previamente.`);
      return new Response(JSON.stringify({ message: 'Ya generado' }), { status: 200 });
    }

    // 2. Insertar el gasto de 480 CHF en la tabla ledger
    const newLedgerItem = {
      id: `LED-AUTO-${Date.now()}`,
      type: 'expense',
      category: 'Pago de alquiler',
      invoice_ref: invoiceRef,
      concept: concept,
      amount: amount,
      transaction_date: issueDate,
      file_name: null,
      file_path: null,
      origin_id: null
    };

    const { error } = await supabase.from('ledger').insert(newLedgerItem);

    if (error) throw error;

    console.log(`✅ Gasto mensual de alquiler generado con éxito: ${invoiceRef}`);
    return new Response(JSON.stringify({ message: 'Gasto generado correctamente', item: newLedgerItem }), { status: 200 });

  } catch (err) {
    console.error('❌ Error generando gasto recurrente:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

// Configuración del Cron Job (Se ejecuta el primer día de cada mes a las 08:00 AM UTC)
export const config = {
  schedule: "0 8 1 * *"
};

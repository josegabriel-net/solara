import { createClient } from "@supabase/supabase-js";

// Cliente com chave secreta (service role). Usar somente em rotas de API.
export function criarClienteServidor() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}

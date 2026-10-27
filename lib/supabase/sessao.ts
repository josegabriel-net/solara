import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Cliente do servidor que lê a sessão do usuário pelos cookies (chave pública).
export async function criarClienteSessao() {
  const armazenamento = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return armazenamento.getAll();
        },
        setAll(lista) {
          try {
            lista.forEach(({ name, value, options }) =>
              armazenamento.set(name, value, options)
            );
          } catch {
            // Chamado de um Server Component: o proxy já renova a sessão.
          }
        },
      },
    }
  );
}

import { redirect } from "next/navigation";
import { criarClienteSessao } from "@/lib/supabase/sessao";

export default async function PaginaInicial() {
  const supabase = await criarClienteSessao();
  const { data } = await supabase.auth.getUser();

  if (!data.user) redirect("/login");

  return (
    <main>
      <div className="cartao">
        <h1>Solara OS</h1>
        <p>{data.user.email}</p>
      </div>
    </main>
  );
}

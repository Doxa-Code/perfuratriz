import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("x-token-perfuratriz");
  if (!token?.value) redirect("/signin");
  redirect("/ncms");
}

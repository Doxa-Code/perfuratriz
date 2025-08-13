import { getUserAuthenticate } from "@/app/actions/security";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUserAuthenticate();
  if (!user) redirect("/signin");
  redirect("/ncms");
}

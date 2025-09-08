import { Menu } from "@/components/menu";
import { getUserAuthenticate } from "@/actions/security";
import { redirect, RedirectType } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user] = await getUserAuthenticate();

  if (!user) redirect("/login", RedirectType.replace);

  return <Menu userAuthenticate={user.raw()}>{children}</Menu>;
}

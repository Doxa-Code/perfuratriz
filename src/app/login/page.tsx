import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { getUserAuthenticate } from "@/actions/security";
import { redirect, RedirectType } from "next/navigation";

export default async function LoginPage() {
  const [user] = await getUserAuthenticate();

  if (user) redirect("/ncms", RedirectType.replace);

  return (
    <div className="flex flex-col gap-4 p-6 w-full md:p-10 h-screen">
      <div className="flex justify-center gap-2 md:justify-start">
        <div className="flex items-center gap-2 ">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="font-medium">Perfuratriz</span>
        </div>
      </div>
      <LoginForm />
    </div>
  );
}

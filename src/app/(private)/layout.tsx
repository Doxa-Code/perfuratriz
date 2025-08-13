import { getUserAuthenticate } from "@/app/actions/security";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";

export default async function Layout({ children }: React.PropsWithChildren) {
  const [user] = await getUserAuthenticate();
  if (!user) redirect("/signin");
  return (
    <div className="flex w-full min-h-screen">
      <div className="page-wrapper flex w-full">
        <Sidebar />
        <div className="body-wrapper w-full bg-white dark:bg-dark">
          <Header layoutType="vertical" />
          <div className="w-full p-6 md:px-6 xl:mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

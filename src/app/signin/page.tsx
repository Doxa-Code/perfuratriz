import AuthLogin from "@/components/auth-login";
import LeftSidebarPart from "@/components/left-sidebar-part";
const Login = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-dark">
          <div className="xl:col-span-8 lg:col-span-7 col-span-12 bg-lightprimary dark:bg-lightprimary lg:block hidden relative overflow-hidden">
            <LeftSidebarPart />
          </div>
          <div className="xl:col-span-4 lg:col-span-5 col-span-12 sm:px-12 p-5">
            <div className="flex h-screen items-center px-3 lg:justify-start justify-center">
              <div className="max-w-[420px] w-full mx-auto">
                <h3 className="text-2xl font-bold">Perfuratriz</h3>
                <p className="text-darklink text-sm font-medium">
                  Acesse com suas credenciais
                </p>
                <AuthLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

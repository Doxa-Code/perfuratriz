import { ImSpinner10 } from "react-icons/im";

export default async function Loading() {
  return (
    <div className="w-full h-screen flex-col gap-2 flex justify-center items-center absolute">
      <ImSpinner10 className="animate-spin" />
      <span>Carregando...</span>
    </div>
  );
}

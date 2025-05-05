"use client";

import { useModais } from "@/lib/hooks/use-modais";
import { useNCM } from "@/lib/hooks/use-ncm";
import { MODAL_CREATE_NCM } from "@/lib/modais";
import { Button } from "./ui/button";

export const ButtonCreateNCM: React.FC = () => {
  const { toggleModal } = useModais();
  const { setNCM } = useNCM();
  return (
    <Button
      onClick={() => {
        toggleModal(MODAL_CREATE_NCM);
        setNCM(null);
      }}
    >
      Novo NCM
    </Button>
  );
};

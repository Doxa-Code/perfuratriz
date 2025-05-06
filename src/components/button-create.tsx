"use client";

import { useModais } from "@/lib/hooks/use-modais";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { Button } from "./ui/button";

type Props = {
  modalName: string;
  title: string;
};

export const ButtonCreate: React.FC<Props> = (props) => {
  const { toggleModal } = useModais();
  const { setRegister } = useRegisterEdit();
  return (
    <Button
      onClick={() => {
        setRegister(null);
        toggleModal(props.modalName);
      }}
    >
      {props.title ?? "Novo"}
    </Button>
  );
};

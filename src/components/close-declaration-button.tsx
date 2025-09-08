"use client";

import { closedDeclarationAction } from "@/actions/declaration-action";
import { useServerActionMutation } from "@/lib/hooks";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { ImSpinner10 } from "react-icons/im";
import { PanelLeftClose } from "lucide-react";

interface Props {
  hidden?: boolean;
  id: string;
  onActionClick?: () => void;
}

export function CloseDeclarationButton(props: Props) {
  const closeDeclaration = useServerActionMutation(closedDeclarationAction, {
    onSuccess() {
      toast.success("Declaração encerrada com sucesso");
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  return (
    <Button
      disabled={closeDeclaration.isPending}
      data-hidden={props.hidden}
      onClick={async () => {
        await closeDeclaration.mutateAsync({
          id: props.id,
        });
        props?.onActionClick?.();
      }}
      className="data-[hidden=true]:hidden bg-purple-600 hover:bg-purple-500"
    >
      {closeDeclaration.isPending ? (
        <ImSpinner10 className="animate-spin" />
      ) : (
        <PanelLeftClose />
      )}
      Encerrar declaração
    </Button>
  );
}

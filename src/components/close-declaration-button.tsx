"use client";

import { closedDeclarationAction } from "@/actions/declaration-action";
import { useServerActionMutation } from "@/lib/hooks";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { ImSpinner10 } from "react-icons/im";
import { PanelLeftClose } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={closeDeclaration.isPending}
          data-hidden={props.hidden}
          className="data-[hidden=true]:hidden bg-purple-600 hover:bg-purple-500"
        >
          {closeDeclaration.isPending ? (
            <ImSpinner10 className="animate-spin" />
          ) : (
            <PanelLeftClose />
          )}
          Encerrar declaração
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso encerrará permanentemente essa
            declaração.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              await closeDeclaration.mutateAsync({
                id: props.id,
              });
              props?.onActionClick?.();
            }}
            className="bg-purple-600 hover:bg-purple-500"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

"use client";
import { authenticate } from "@/app/actions/auth";
import { useServerActionMutation } from "@/hooks/server-actions-hooks";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useToast } from "@/hooks/use-toast";

const AuthLogin = () => {
  const { toast } = useToast();
  const authenticateActions = useServerActionMutation(authenticate, {
    onError(error) {
      if (error.message === "NEXT_REDIRECT") return;
      toast({
        variant: "destructive",
        title: "Erro ao autenticar",
        description: error.message,
      });
    },
  });
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          const body = {
            email: form.get("email")?.toString() ?? "",
            password: form.get("password")?.toString() ?? "",
          };
          authenticateActions.mutate(body);
        }}
        className="mt-6"
      >
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="text"
            name="email"
            sizing="md"
            className="form-control"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="passwd" value="Senha" />
          </div>
          <TextInput
            id="passwd"
            type="password"
            name="password"
            sizing="md"
            className="form-control"
          />
        </div>
        <Button
          disabled={authenticateActions.isPending}
          color="primary"
          type="submit"
          className="w-full rounded-md disabled:hover:opacity-70 disabled:opacity-70"
        >
          {!authenticateActions.isPending ? (
            "Acessar"
          ) : (
            <>
              <Spinner className="w-2" />
              Acessando...
            </>
          )}
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;

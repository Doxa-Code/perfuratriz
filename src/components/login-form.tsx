"use client";
import { authenticate } from "@/actions/user-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useServerActionMutation } from "@/lib/hooks";
import { FormEvent } from "react";
import { ImSpinner8 } from "react-icons/im";

export function LoginForm() {
  const mutate = useServerActionMutation(authenticate);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    mutate.mutate({
      email: form.get("email")?.toString() ?? "",
      password: form.get("password")?.toString() ?? "",
    });
  };

  return (
    <div className="flex flex-1 w-full items-center justify-center">
      <form onSubmit={onSubmit} className="flex max-w-sm w-full flex-col gap-6">
        <div className="grid w-full gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="joe.doe@example.com"
              required
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Senha</Label>
            </div>
            <Input
              name="password"
              type="password"
              required
              placeholder="**************"
            />
          </div>
          <Button
            disabled={mutate.isPending}
            type="submit"
            className="w-full group"
          >
            Acessar
            <ImSpinner8 className="animate-spin group-disabled:!block hidden" />
          </Button>
        </div>
      </form>
    </div>
  );
}

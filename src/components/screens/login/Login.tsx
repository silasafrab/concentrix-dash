// components/Login.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/primitives/typography/typography";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUser } from "@/contexts/UserContext";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";
import GithubIllustration from "@/components/svg/GithubIllustration";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "O username precisa de pelo menos 2 caracteres",
  }),
});

export const Login = () => {
  const { push } = useRouter();
  const { checkUsername } = useUser();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const isValid = await checkUsername(data.username);
    if (isValid) {
      push("/dashboard");
    } else {
      console.log("Usuário não encontrado");
      toast({
        variant: "destructive",
        title: "Ops, usuário não encontrado",
        description: "Verifique novamente se foi digitado corretamente.",
        action: (
          <ToastAction onClick={() => form.reset()} altText="Try again">
            Tente novamente
          </ToastAction>
        ),
      });
    }
  };

  return (
    <div className="container flex-1">
      <div className="h-full flex justify-center items-center">
        <Card className="max-w-2xl">
          <CardHeader>
            <div className="flex gap-4 flex-col items-center justify-center">
              <Typography as="h3" type="subtitle-m" className="text-center">
                Login
              </Typography>
              <GithubIllustration className="w-40 h-40 text-gray-700 dark:text-white" />
              <Typography
                as="h3"
                type="body-l"
                className="text-center opacity-70"
              >
                Para iniciar uma tarefa, preciso do seu username no GitHub.
                Vamos lá, qual é o seu?
              </Typography>
            </div>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                <Typography as="h3" type="body-xs" className="font-bold">
                  github.com/
                </Typography>
                <Input placeholder="user" {...form.register("username")} />
              </div>
              <Button type="submit" className="w-full md:w-fit mx-auto">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

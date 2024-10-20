"use client";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Typography } from "@/components/primitives/typography/typography";
import { Input } from "@/components/ui/input";

export const Login = () => {
  const { push } = useRouter();
  return (
    <div className="container flex-1">
      <div className="h-full flex justify-center items-center">
        <Card className="max-w-2xl">
          <CardHeader>
            <Typography as="h3" type="subtitle-m">
              Para iniciar uma tarefa, preciso do seu username no GitHub. Vamos
              lá, qual é o seu?
            </Typography>
            <h1></h1>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 justify-center items-center">
              <Typography as="h3" type="body-xs" className="font-bold">
                github.com/
              </Typography>
              <Input placeholder="user" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={() => push("/dashboard")}>Entrar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

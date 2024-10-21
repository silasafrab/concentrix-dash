"use client";

import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Status } from "@/components/primitives/status/Status";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Typography } from "@/components/primitives/typography/typography";

import { useRouter } from "next/navigation";
import { ClipboardPlus, Pen } from "lucide-react";

export const DataTaskMobile = () => {
  const TaskCtx = useApp();

  const removeTask = (id: string) => {
    TaskCtx?.dispatch({
      type: "remove",
      payload: { id },
    });
  };

  const router = useRouter();
  const handleEdit = (id: string) => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <div className="flex flex-col gap-3 md:hidden">
      <div className="fixed bottom-0 py-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center bg-white/10 backdrop-blur z-50 md:hidden">
        <Button onClick={() => router.push("/dashboard/add")} className="w-72">
          <ClipboardPlus />
          Adicionar tarefas
        </Button>
      </div>
      <Button>Adicionar tarefa</Button>
      {TaskCtx?.task.map((item) => (
        <Card className=" " key={item.id}>
          <CardHeader className="flex flex-row justify-between items-center">
            <Typography type="subtitle-m">{item.name}</Typography>
            <Status status={item.priority} />
          </CardHeader>
          <CardContent>
            <Typography type="body-l">{item.description}</Typography>
          </CardContent>

          <CardFooter className=" gap-3">
            <Button
              variant={"outline"}
              onClick={() => removeTask(item.id)}
              className="w-full"
            >
              Remover
            </Button>
            <Button onClick={() => handleEdit(item.id)} className="w-full">
              <Pen />
              Editar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

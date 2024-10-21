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
import { Pen } from "lucide-react";
import MotionContainer from "@/components/primitives/MotionContainer/MotionContainer";

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
    <>
      <div className="flex flex-col gap-3 md:hidden ">
        <MotionContainer className="flex gap-4 flex-col">
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
                <MotionContainer
                  from={{ scale: 0.8 }}
                  to={{ scale: 1 }}
                  delay={0}
                >
                  <Button
                    variant={"outline"}
                    onClick={() => removeTask(item.id)}
                    className="w-full"
                  >
                    Remover
                  </Button>
                </MotionContainer>
                <MotionContainer
                  from={{ scale: 1 }}
                  to={{ scale: 1 }}
                  delay={0}
                >
                  <Button
                    onClick={() => handleEdit(item.id)}
                    className="w-full"
                  >
                    <Pen />
                    Editar
                  </Button>
                </MotionContainer>
              </CardFooter>
            </Card>
          ))}
        </MotionContainer>
      </div>
    </>
  );
};

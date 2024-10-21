import { Typography } from "@/components/primitives/typography/typography";
import { DataTasks } from "./DataTasks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useApp } from "@/contexts/AppContext";
import { DataTaskMobile } from "./DataTaskMobile";
import MotionContainer from "@/components/primitives/MotionContainer/MotionContainer";
import { Button } from "@/components/ui/button";
import { ClipboardPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export const TaskList = () => {
  const TaskCtx = useApp();
  const { push } = useRouter();
  return (
    <div className="">
      <MotionContainer>
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <Typography as="h1" type="subtitle-m">
              Tarefa{TaskCtx?.task.length === 1 ? "" : "s"}
            </Typography>
            <div className="bg-foreground/40 rounded-full flex justify-center items-center size-8">
              <Typography className="font-bold">
                {TaskCtx?.task.length}
              </Typography>
            </div>
          </CardHeader>
          <CardContent>
            <DataTasks />
            <DataTaskMobile />
          </CardContent>
        </Card>
      </MotionContainer>
      <div className="fixed bottom-0 py-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center bg-white/5 backdrop-blur z-50 md:hidden">
        <Button className="w-72" onClick={() => push("/dashboard/add")}>
          <ClipboardPlus />
          Adicionar tarefas
        </Button>
      </div>
    </div>
  );
};

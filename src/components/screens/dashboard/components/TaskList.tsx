import { Typography } from "@/components/primitives/typography/typography";
import { DataTasks } from "./DataTasks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useApp } from "@/contexts/AppContext";
import { DataTaskMobile } from "./DataTaskMobile";

export const TaskList = () => {
  const TaskCtx = useApp();
  return (
    <div className="">
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
    </div>
  );
};

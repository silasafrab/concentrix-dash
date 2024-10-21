"use client";
import { useApp } from "@/contexts/AppContext";

import { NoEmpty } from "./components/NoEmpty";

import { TaskList } from "./components/TaskList";

export const Dashboard = () => {
  const TaskCtx = useApp();

  return (
    <div className="container  my-16">
      {TaskCtx?.task.length === 0 ? (
        <NoEmpty />
      ) : (
        <>
          <TaskList />
        </>
      )}
    </div>
  );
};

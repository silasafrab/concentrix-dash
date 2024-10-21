import { Task } from "@/types/Tasks";
import { v4 as uuidv4 } from "uuid";
type AddActions = {
  type: "add";
  payload: {
    name: string;
    description: string;
    priority: "low" | "middle" | "high";
  };
};

type RemoveActions = {
  type: "remove";
  payload: {
    id: string;
  };
};

type EditActions = {
  type: "edit";
  payload: {
    id: string;
    name: string;

    description: string;
    priority: "low" | "middle" | "high";
  };
};

export type TaskActions = AddActions | RemoveActions | EditActions;

export const taskReducer = (task: Task[], actions: TaskActions) => {
  switch (actions.type) {
    case "add":
      return [
        ...task,
        {
          id: uuidv4(),
          name: actions.payload.name,
          description: actions.payload.description,
          createAt: new Date().toISOString(),
          priority: actions.payload.priority,
        },
      ];

    case "remove":
      return task.filter((item) => item.id !== actions.payload.id);

    case "edit":
      return task.map((item) =>
        item.id === actions.payload.id
          ? {
              ...item,
              name: actions.payload.name,
              description: actions.payload.description,
              createAt: new Date().toISOString(),
              priority: actions.payload.priority,
            }
          : item
      );

    default:
      return task;
  }
};

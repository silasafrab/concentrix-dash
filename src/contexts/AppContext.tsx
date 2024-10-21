"use client";
import { TaskActions, taskReducer } from "@/reducers/taskReducer";
import { Task } from "@/types/Tasks";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

const STORAGE_KEY = "tasks";

type appContextType = {
  task: Task[];
  dispatch: Dispatch<TaskActions>;
};

export const AppContext = createContext<appContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [task, dispatch] = useReducer(
    taskReducer,
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(task));
  }, [task]);

  return (
    <AppContext.Provider value={{ task, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

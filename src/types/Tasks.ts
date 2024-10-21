export type Task = {
  id: string;
  name: string;
  description: string;
  createAt?: string;
  priority: "low" | "middle" | "high";
};

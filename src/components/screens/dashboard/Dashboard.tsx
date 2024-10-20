import { NoEmpty } from "./components/NoEmpty";
import { TaskList } from "./components/TaskList";

export const Dashboard = () => {
  return (
    <div className="container h-full my-16">
      <div className="hidden">
        <NoEmpty />
      </div>
      <TaskList />
    </div>
  );
};

import { createContext, useContext, useState, ReactNode } from "react";
import { ITask } from "../../entities/task/model/task";
import { initialTasks } from "../../entities/task/model/mock-tasks";

interface TaskContextType {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (id: string, updatedTask: ITask) => void;
  deleteTask: (id: string) => void;
}

const defaultContextValue: TaskContextType = {
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
};

const TaskContext = createContext<TaskContextType>(defaultContextValue);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id: string, updatedTask: ITask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  return context;
};

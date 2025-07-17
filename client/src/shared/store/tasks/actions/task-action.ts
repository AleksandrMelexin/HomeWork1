import { initialTasks } from "@entities/task/model/mock-tasks";
import { ITask } from "@entities/task/model/task";
import { TaskActionTypes } from "../types/task";

export const fetchTasks = () => {
  const response = initialTasks;
  return {
    type: TaskActionTypes.FETCH_TASKS,
    payload: response,
  };
};

export const addTask = (task: ITask) => {
  return {
    type: TaskActionTypes.ADD_TASK,
    payload: task,
  };
};

export const updateTask = (updatedTask: ITask) => {
  return {
    type: TaskActionTypes.UPDATE_TASK,
    payload: updatedTask,
  };
};

export const removeTask = (id: string) => {
  return {
    type: TaskActionTypes.REMOVE_TASK,
    payload: id,
  };
};

import { ITask } from "../model/task";

export interface GetTasksResponse {
  tasks: ITask[];
}

export interface ErrorResponse {
  error: string;
}

export const getTasks = async (): Promise<GetTasksResponse | ErrorResponse> => {
  try {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
    const res = await fetch(`${SERVER_URL}:${SERVER_PORT}/tasks`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data: GetTasksResponse | ErrorResponse = await res.json();
    return data;
  } catch (e) {
    return { error: e.message };
  }
};

export const getTaskById = async (
  id: string
): Promise<ITask | ErrorResponse> => {
  try {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
    const res = await fetch(`${SERVER_URL}:${SERVER_PORT}/tasks/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data: ITask | ErrorResponse = await res.json();
    return data;
  } catch (e) {
    return { error: e.message };
  }
};

export const createTask = async (
  task: ITask
): Promise<void | ErrorResponse> => {
  try {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
    await fetch(`${SERVER_URL}:${SERVER_PORT}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });
  } catch (e) {
    return { error: e.message };
  }
};

export const updateTask = async (
  task: ITask
): Promise<void | ErrorResponse> => {
  try {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
    await fetch(`${SERVER_URL}:${SERVER_PORT}/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });
  } catch (e) {
    return { error: e.message };
  }
};

export const deleteTask = async (id: string): Promise<void | ErrorResponse> => {
  try {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
    await fetch(`${SERVER_URL}:${SERVER_PORT}/tasks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return { error: e.message };
  }
};

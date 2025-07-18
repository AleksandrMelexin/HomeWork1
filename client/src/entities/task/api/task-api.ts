import { ITask } from "../model/task";

/**
 * Интерфейс ответа для получения списка задач
 * @property {ITask[]} tasks - Массив задач
 */
export interface GetTasksResponse {
  tasks: ITask[];
}

/**
 * Интерфейс ответа с ошибкой
 * @property {string} error - Сообщение об ошибке
 */
export interface ErrorResponse {
  error: string;
}

/**
 * Получает список всех задач с сервера
 * @async
 * @returns {Promise<GetTasksResponse | ErrorResponse>}
 *   Промис с массивом задач или сообщением об ошибке
 * @throws {Error} При ошибке сетевого запроса
 */
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

/**
 * Получает задачу по идентификатору
 * @async
 * @param {string} id - UUID задачи
 * @returns {Promise<ITask | ErrorResponse>}
 *   Промис с задачей или сообщением об ошибке
 * @throws {Error} При ошибке сетевого запроса
 */
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

/**
 * Создает новую задачу на сервере
 * @async
 * @param {ITask} task - Объект задачи для создания
 * @returns {Promise<void | ErrorResponse>}
 *   Промис без данных или с сообщением об ошибке
 * @throws {Error} При ошибке сетевого запроса
 */
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

/**
 * Обновляет существующую задачу
 * @async
 * @param {ITask} task - Объект задачи с обновленными данными
 * @returns {Promise<void | ErrorResponse>}
 *   Промис без данных или с сообщением об ошибке
 * @throws {Error} При ошибке сетевого запроса
 */
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

/**
 * Удаляет задачу по идентификатору
 * @async
 * @param {string} id - UUID задачи для удаления
 * @returns {Promise<void | ErrorResponse>}
 *   Промис без данных или с сообщением об ошибке
 * @throws {Error} При ошибке сетевого запроса
 */
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

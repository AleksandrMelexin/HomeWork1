import { Category, ITask, Priority } from "@entities/task/model/task";

/**
 * Состояние хранилища задач
 * Содержит:
 * - Список задач
 * - Фильтры для отображения задач
 * @property {ITask[]} tasks - Массив задач
 * @property {"всe" | Category} statusFilter - Фильтр по статусу ("все" или конкретный статус)
 * @property {"всe" | Priority} priorityFilter - Фильтр по приоритету ("все" или конкретный приоритет)
 * @property {"всe" | Category} typeFilter - Фильтр по типу задачи ("все" или конкретный тип)
 */
export interface TaskState {
  tasks: ITask[];
  statusFilter: "всe" | Category;
  priorityFilter: "всe" | Priority;
  typeFilter: "всe" | Category;
}

/**
 * Типы действий (action types) для работы с задачами
 * Определяет возможные операции над задачами:
 * - Загрузка списка задач
 * - Добавление новой задачи
 * - Обновление существующей задачи
 * - Удаление задачи
 */
export enum TaskActionTypes {
  FETCH_TASKS = "FETCH_TASKS",
  ADD_TASK = "ADD_TASK",
  UPDATE_TASK = "UPDATE_TASK",
  REMOVE_TASK = "REMOVE_TASK",
}

/**
 * Действие загрузки списка задач
 * @property {TaskActionTypes.FETCH_TASKS} type - Тип действия (FETCH_TASKS)
 * @property {ITask[]} payload - Массив загруженных задач
 */
interface FetchTasksAction {
  type: TaskActionTypes.FETCH_TASKS;
  payload: ITask[];
}

/**
 * Действие добавления новой задачи
 * @property {TaskActionTypes.ADD_TASK} type - Тип действия (ADD_TASK)
 * @property {ITask} payload - Добавляемая задача
 */
interface AddTaskAction {
  type: TaskActionTypes.ADD_TASK;
  payload: ITask;
}

/**
 * Действие обновления существующей задачи
 * @property {TaskActionTypes.UPDATE_TASK} type - Тип действия (UPDATE_TASK)
 * @property {ITask} payload - Обновленные данные задачи
 */
interface UpdateTaskAction {
  type: TaskActionTypes.UPDATE_TASK;
  payload: ITask;
}

/**
 * Действие удаления задачи
 * @property {TaskActionTypes.REMOVE_TASK} type - Тип действия (REMOVE_TASK)
 * @property {string} payload - ID удаляемой задачи
 */
interface RemoveTaskAction {
  type: TaskActionTypes.REMOVE_TASK;
  payload: string;
}

/**
 * Объединенный тип всех возможных действий с задачами
 * Может быть одним из:
 * - FetchTasksAction
 * - AddTaskAction
 * - UpdateTaskAction
 * - RemoveTaskAction
 */
export type TaskAction =
  | FetchTasksAction
  | AddTaskAction
  | UpdateTaskAction
  | RemoveTaskAction;

import { Category, ITask, Priority } from "../../../../entities/task/model/task";

export interface TaskState {
    tasks: ITask[];
    statusFilter: 'всe' | Category;
    priorityFilter: 'всe' | Priority;
    typeFilter: 'всe' | Category;
}

export enum TaskActionTypes {
    FETCH_TASKS = 'FETCH_TASKS',
    ADD_TASK = 'ADD_TASK',
    UPDATE_TASK = 'UPDATE_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
}

interface FetchTasksAction {
    type: TaskActionTypes.FETCH_TASKS;
    payload: ITask[]
}

interface AddTaskAction {
    type: TaskActionTypes.ADD_TASK;
    payload: ITask;
}

interface UpdateTaskAction {
    type: TaskActionTypes.UPDATE_TASK;
    payload: ITask;
}

interface RemoveTaskAction {
    type: TaskActionTypes.REMOVE_TASK;
    payload: string;
}

export type TaskAction = FetchTasksAction | AddTaskAction | UpdateTaskAction | RemoveTaskAction;
import { initialTasks } from "./mock-tasks";
import { ITask } from "./tasks-model";

export class TaskService {
    private _tasks: ITask[] = [];

    constructor() {
        this._tasks = initialTasks;
    }

    getTasks(): ITask[] {
        return this._tasks;
    }

    createTask(task: ITask) {
        this._tasks.push(task);
    }

    getTaskById(id: string) {
        return this._tasks.find((task) => task.id === id);
    }

    deleteTask(id: string) {
        this._tasks = this._tasks.filter((task) => task.id !== id);
    }

    updateTask(id: string, task: ITask) {
        this._tasks = this._tasks.map(t => t.id === id ? task : t);
    }
}
import { initialTasks } from "./mock-tasks";
import { ITask } from "./tasks-model";

/**
 * Сервис для работы с задачами
 * 
 * Обеспечивает:
 * - Хранение списка задач
 * - CRUD операции над задачами
 * - Работу с mock-данными
 */
export class TaskService {
    private _tasks: ITask[] = [];

    /**
     * Создает экземпляр TaskService
     * @constructor
     * @description Инициализирует список задач mock-данными
     */
    constructor() {
        this._tasks = initialTasks;
    }

    /**
     * Получает список всех задач
     * @returns {ITask[]} Массив задач
     */
    getTasks(): ITask[] {
        return this._tasks;
    }

    /**
     * Создает новую задачу
     * @param {ITask} task - Объект задачи для создания
     */
    createTask(task: ITask) {
        this._tasks.push(task);
    }

    /**
     * Находит задачу по идентификатору
     * @param {string} id - UUID задачи
     * @returns {ITask | undefined} Найденная задача или undefined
     */
    getTaskById(id: string) {
        return this._tasks.find((task) => task.id === id);
    }

    /**
     * Удаляет задачу по идентификатору
     * @param {string} id - UUID задачи для удаления
     */
    deleteTask(id: string) {
        this._tasks = this._tasks.filter((task) => task.id !== id);
    }

    /**
     * Обновляет существующую задачу
     * @param {string} id - UUID задачи для обновления
     * @param {ITask} task - Новые данные задачи
     */
    updateTask(id: string, task: ITask) {
        this._tasks = this._tasks.map(t => t.id === id ? task : t);
    }
}
import { ConfigService } from "@/common/config-service";
import { LoggerService } from "@/common/logger-service";
import { TaskService } from "./tasks-service";
import { Request, Router, Response } from "express";

/**
 * Контроллер для обработки HTTP-запросов задач
 * 
 * Обеспечивает REST API для:
 * - Получения списка задач
 * - Получения задачи по ID
 * - Создания новых задач
 * - Обновления существующих задач
 * - Удаления задач
 */
export class TasksController {
    private _router: Router;
    private _taskService: TaskService;
    private _configService: ConfigService;
    private _loggerService: LoggerService;

    /**
     * Создает экземпляр TasksController
     * @constructor
     * @param {LoggerService} loggerService - Сервис логирования
     * @param {ConfigService} configService - Сервис конфигурации
     * @description Инициализирует роутер и привязывает обработчики маршрутов
     */
    constructor(loggerService: LoggerService, configService: ConfigService) {
        this._router = Router();
        this._taskService = new TaskService();
        this._configService = configService;
        this._loggerService = loggerService;
        this.bindRouters();
    }

    /**
     * Привязывает обработчики к маршрутам
     * @private
     * @description Настраивает все REST endpoints для работы с задачами
     */
    bindRouters() {
        this._router.get("/", this.getTasks.bind(this));
        this._router.get("/:id", this.getTaskById.bind(this));
        this._router.post("/", this.createTask.bind(this));
        this._router.delete("/:id", this.deleteTask.bind(this));
        this._router.patch("/:id", this.updateTask.bind(this));
    }

    /**
     * Возвращает экземпляр роутера Express
     * @returns {Router} Экземпляр роутера с привязанными обработчиками
     */
    get router() {
        return this._router;
    }

    /**
     * Обрабатывает запрос на получение списка задач
     * @async
     * @param {Request} req - Объект запроса Express
     * @param {Response} res - Объект ответа Express
     * @returns {Promise<void>}
     */
    async getTasks(req: Request, res: Response) {
        try {
            const tasks = this._taskService.getTasks();
            res.status(200).json({"tasks": tasks});
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось получить задачи"});
        }
    }

    /**
     * Обрабатывает запрос на получение задачи по ID
     * @async
     * @param {Request} req - Объект запроса Express (с параметром id)
     * @param {Response} res - Объект ответа Express
     * @returns {Promise<void>}
     */
    async getTaskById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const task = this._taskService.getTaskById(id);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({"error": "Задача не найдена, либо была удалена"});
            }
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось получить задачу"});
        }
    }

    /**
     * Обрабатывает запрос на создание новой задачи
     * @async
     * @param {Request} req - Объект запроса Express (с телом {task: ITask})
     * @param {Response} res - Объект ответа Express
     * @returns {Promise<void>}
     */
    async createTask(req: Request, res: Response) {
        try {
            const task = req.body.task;
            this._taskService.createTask(task);
            res.sendStatus(201);
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось создать задачу"});
        }
    }

    /**
     * Обрабатывает запрос на удаление задачи
     * @async
     * @param {Request} req - Объект запроса Express (с параметром id)
     * @param {Response} res - Объект ответа Express
     * @returns {Promise<void>}
     */
    async deleteTask(req: Request, res: Response) {
        try {
            const id = req.params.id;
            this._taskService.deleteTask(id);
            res.sendStatus(204);
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось удалить задачу"});
        } 
    }

    /**
     * Обрабатывает запрос на обновление задачи
     * @async
     * @param {Request} req - Объект запроса Express (с телом {task: ITask})
     * @param {Response} res - Объект ответа Express
     * @returns {Promise<void>}
     */
    async updateTask(req: Request, res: Response) {
        try {
            const task = req.body.task;
            this._taskService.updateTask(task.id, task);
            res.sendStatus(200);
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось обновить задачу"});
        }
    }
}
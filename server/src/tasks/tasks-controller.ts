import { ConfigService } from "@/common/config-service";
import { LoggerService } from "@/common/logger-service";
import { TaskService } from "./tasks-service";
import { Request, Router, Response } from "express";

export class TasksController {
    private _router: Router;
    private _taskService: TaskService;
    private _configService: ConfigService;
    private _loggerService: LoggerService;

    constructor(loggerService: LoggerService, configService: ConfigService) {
        this._router = Router();
        this._taskService = new TaskService();
        this._configService = configService;
        this._loggerService = loggerService;
        this.bindRouters();
    }

    bindRouters() {
        this._router.get("/", this.getTasks.bind(this));
        this._router.get("/:id", this.getTaskById.bind(this));
        this._router.post("/", this.createTask.bind(this));
        this._router.delete("/:id", this.deleteTask.bind(this));
        this._router.patch("/:id", this.updateTask.bind(this));
    }

    get router() {
        return this._router;
    }

    async getTasks (req: Request, res: Response) {
        try {
            const tasks = this._taskService.getTasks();
            this._loggerService.infoLog("Задачи получена");
            res.status(200).json({"tasks": tasks});
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось получить задачи"});
        }
    }

    async getTaskById (req: Request, res: Response) {
        try {
            const id = req.params.id;
            const task = this._taskService.getTaskById(id);
            if (task) {
                this._loggerService.infoLog("Задача получена");
                res.status(200).json(task);
            } else {
                res.status(404).json({"error": "Задача не найдена, либо была удалена"});
            }
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось получить задачу"});
        }
    }

    async createTask (req: Request, res: Response) {
        try {
            const task = req.body.task;
            this._taskService.createTask(task);
            this._loggerService.infoLog("Задача создана");
            res.sendStatus(201);
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось создать задачу"});
        }
    }

    async deleteTask (req: Request, res: Response) {
        try {
            const id = req.params.id;
            this._taskService.deleteTask(id);
            this._loggerService.infoLog("Задача удалена");
            res.sendStatus(204);
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось удалить задачу"});
        } 
    }

    async updateTask (req: Request, res: Response) {
        try {
            const task = req.body.task;
            this._taskService.updateTask(task.id, task);
            this._loggerService.infoLog("Задача обновлена");
            res.sendStatus(200);
        } catch (e) {
            this._loggerService.errorLog(e as Error);
            res.status(500).json({"error": "Что-то пошло не так, не удалось обновить задачу"});
        }
    }
} 
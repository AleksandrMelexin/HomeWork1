import express from "express";
import { ConfigService } from "@common/config-service";
import { LoggerService } from "@common/logger-service";
import { TasksController } from "./tasks/tasks-controller";
import cors from "cors";

async function startApp() {
  const app = express();
  const loggerService = new LoggerService();
  const configService = new ConfigService(loggerService);
  const tasksController = new TasksController(loggerService, configService);
  const URL = `${configService.get('CLIENT_URL')}:${configService.get('CLIENT_PORT')}`;
  app.use(cors({
    origin: URL,
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type'],
    maxAge: 3600 
  }));

  app.use(express.json());
  app.use("/tasks", tasksController.router);
  const PORT = configService.get("SERVER_PORT");
  app.listen(PORT, () =>
    loggerService.infoLog(`Сервер запущен на порту ${PORT}`)
  );
}

startApp();

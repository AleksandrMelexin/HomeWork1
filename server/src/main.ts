import express from "express";
import { ConfigService } from "@common/config.service";
import { LoggerService } from "@common/logger.service";

async function startApp() {
  const app = express();
  const loggerService = new LoggerService();
  const configService = new ConfigService(loggerService);
  app.use(express.json());
  const PORT = configService.get("SERVER_PORT");
  app.listen(PORT, () =>
    loggerService.infoLog(`Сервер запущен на порту ${PORT}`)
  );
}

startApp();

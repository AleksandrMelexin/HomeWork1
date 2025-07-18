import { DotenvParseOutput, DotenvConfigOutput, config } from "dotenv";
import { LoggerService } from "./logger-service";

/**
 * Сервис для работы с конфигурацией приложения
 * 
 * Загружает переменные окружения из .env файла
 * и предоставляет к ним доступ
 */
export class ConfigService {
  private readonly config: DotenvParseOutput;
  private _loggerService: LoggerService;

  /**
   * Создает экземпляр ConfigService
   * @param {LoggerService} loggerService - Сервис для логирования
   * @throws {Error} Если не удалось загрузить конфигурацию
   */
  constructor(loggerService: LoggerService) {
    this._loggerService = loggerService;
    const result: DotenvConfigOutput = config();
    
    if (result.error) {
      loggerService.errorLog(new Error("Не удалось прочитать .env файл для конфигурации"));
    } else {
      loggerService.successLog("Конфигурация загружена");
      this.config = result.parsed as DotenvParseOutput;
    }
  }

  /**
   * Получает значение переменной окружения по ключу
   * @param {string} key - Ключ переменной окружения
   * @returns {string} Значение переменной окружения
   * @throws {Error} Если переменная не найдена
   */
  get(key: string): string {
    return this.config[key];
  }
}
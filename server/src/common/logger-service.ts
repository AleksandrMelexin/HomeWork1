/**
 * Сервис для логирования сообщений различного уровня
 * 
 * Предоставляет методы для вывода в консоль:
 * - Успешных операций
 * - Информационных сообщений
 * - Предупреждений
 * - Ошибок
 */
export class LoggerService {
  /**
   * Создает экземпляр LoggerService
   * @constructor
   * @description При инициализации выводит сообщение о успешном запуске сервиса
   */
  constructor() {
    this.successLog(`LoggerService запущен`);
  }

  /**
   * Логирует успешное выполнение операции
   * @param {string} message - Сообщение для логирования
   */
  successLog(message: string) {
    console.log(`[success] ${message} :)`);
  }

  /**
   * Логирует информационное сообщение
   * @param {string} message - Информационное сообщение
   */
  infoLog(message: string) {
    console.log(`[info] ${message}`);
  }

  /**
   * Логирует предупреждение
   * @param {string} message - Текст предупреждения
   */
  warningLog(message: string) {
    console.log(`[warning] ${message}`);
  }

  /**
   * Логирует ошибку
   * @param {Error} err - Объект ошибки
   */
  errorLog(err: Error) {
    console.log(`[error] ${err.message} :(`);
  }
}
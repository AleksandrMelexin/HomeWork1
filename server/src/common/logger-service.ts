export class LoggerService {
  constructor() {
    this.successLog(`LoggerService запущен`);
  }

  successLog(message: string) {
    console.log(`[success] ${message} :)`);
  }

  infoLog(message: string) {
    console.log(`[info] ${message}`);
  }

  warningLog(message: string) {
    console.log(`[warning] ${message}`);
  }

  errorLog(err: Error) {
    console.log(`[error] ${err.message} :(`);
  }
}

import pino from 'pino'

export enum LogLevelEnum {
  fatal = 'fatal',
  error = 'error',
  warn = 'warn',
  info = 'info',
  debug = 'debug',
  trace = 'trace',
}

export class Logger {
  private _logger: pino.Logger

  public constructor(public readonly name: string, logLevel?: LogLevelEnum) {
    this._logger = pino({
      enabled: process.env.NODE_ENV !== 'test',
      level: logLevel || process.env.LOG_LEVEL || process.env.REACT_APP_LOG_LEVEL || LogLevelEnum.info,
      name,
      base: {
        hostname: null,
      },
    })
  }

  public fatal(msg: string, obj?: any): void {
    if (obj !== undefined) {
      this._logger.fatal(obj, msg)
    } else {
      this._logger.fatal(msg)
    }
  }

  public error(msg: string, obj?: any): void {
    if (obj !== undefined) {
      this._logger.error(obj, msg)
    } else {
      this._logger.error(msg)
    }
  }

  public warn(msg: string, obj?: any): void {
    if (obj !== undefined) {
      this._logger.warn(obj, msg)
    } else {
      this._logger.warn(msg)
    }
  }

  public info(msg: string, obj?: any): void {
    if (obj !== undefined) {
      this._logger.info(obj, msg)
    } else {
      this._logger.info(msg)
    }
  }

  public debug(msg: string, obj?: any): void {
    if (obj !== undefined) {
      this._logger.debug(obj, msg)
    } else {
      this._logger.debug(msg)
    }
  }

  public trace(msg: string, obj?: any): void {
    if (obj !== undefined) {
      this._logger.trace(obj, msg)
    } else {
      this._logger.trace(msg)
    }
  }
}

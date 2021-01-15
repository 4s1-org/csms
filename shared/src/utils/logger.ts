import pino from 'pino'

export type LogLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent'

export class Logger {
  private _logger: pino.Logger

  public constructor(
    public readonly name: string,
    logLevel: LogLevel = "debug"
  ) {
    this._logger = pino({
      enabled: process.env.NODE_ENV !== 'test',
      level: logLevel,
      prettyPrint: { colorize: true },
      name,
      base: {
        hostname: null,
      },
    })
  }

  public fatal(msg: string, obj?: any): void {
    this._logger.fatal(msg)
    if (obj !== undefined) {
      this._logger.fatal(obj, msg)
    }
  }

  public error(msg: string, obj?: any): void {
    this._logger.error(msg)
    if (obj !== undefined) {
      this._logger.error(obj, msg)
    }
  }

  public warn(msg: string, obj?: any): void {
    this._logger.warn(msg)
    if (obj !== undefined) {
      this._logger.warn(obj, msg)
    }
  }

  public info(msg: string, obj?: any): void {
    this._logger.info(msg)
    if (obj !== undefined) {
      this._logger.info(obj, msg)
    }
  }

  public debug(msg: string, obj?: any): void {
    this._logger.debug(msg)
    if (obj !== undefined) {
      this._logger.debug(obj)
    }
  }

  public trace(msg: string, obj?: any): void {
    this._logger.trace(msg)
    if (obj !== undefined) {
      this._logger.trace(obj)
    }
  }

  public silent(msg: string, obj?: any): void {
    this._logger.silent(msg)
    if (obj !== undefined) {
      this._logger.silent(obj, msg)
    }
  }
}

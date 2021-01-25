import pino from 'pino'

export type LogLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent'

export class Logger {
  private _logger: pino.Logger

  public constructor(public readonly name: string, logLevel: LogLevel = 'debug') {
    this._logger = pino({
      enabled: process.env.NODE_ENV !== 'test',
      level: logLevel,
      name,
      base: {
        hostname: null,
      },
    })
  }

  public fatal(msg: string, obj?: unknown): void {
    if (obj !== undefined) {
      this._logger.fatal(`${msg} | ${obj}`)
    } else {
      this._logger.fatal(msg)
    }
  }

  public error(msg: string, obj?: unknown): void {
    if (obj !== undefined) {
      this._logger.error(`${msg} | ${obj}`)
    } else {
      this._logger.error(msg)
    }
  }

  public warn(msg: string, obj?: unknown): void {
    if (obj !== undefined) {
      this._logger.warn(`${msg} | ${obj}`)
    } else {
      this._logger.warn(msg)
    }
  }

  public info(msg: string, obj?: unknown): void {
    if (obj !== undefined) {
      this._logger.info(`${msg} | ${obj}`)
    } else {
      this._logger.info(msg)
    }
  }

  public debug(msg: string, obj?: unknown): void {
    if (obj !== undefined) {
      this._logger.debug(`${msg} | ${obj}`)
    } else {
      this._logger.debug(msg)
    }
  }

  public trace(msg: string, obj?: unknown): void {
    if (obj !== undefined) {
      this._logger.trace(`${msg} | ${obj}`)
    } else {
      this._logger.trace(msg)
    }
  }

  public silent(msg: string, obj?: unknown): void {
    if (obj !== undefined) {
      this._logger.silent(`${msg} | ${obj}`)
    } else {
      this._logger.silent(msg)
    }
  }
}

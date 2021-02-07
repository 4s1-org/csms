import pino from 'pino'

export type LogLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace'

export class Logger {
  private _logger: pino.Logger

  public constructor(public readonly name: string, logLevel: LogLevel = 'info') {
    this._logger = pino({
      enabled: process.env.NODE_ENV !== 'test',
      level: logLevel,
      name,
      base: {
        hostname: null,
      },
      browser: {
        write: {
          write: (obj): void => {
            console.info(JSON.stringify(obj))
          },
        },
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

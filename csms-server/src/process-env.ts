import dotenv from 'dotenv'
dotenv.config()

/*
LOG_LEVEL=debug
PORT=3000
*/

export abstract class ProcessEnv {
  public static get NODE_ENV(): string {
    return process.env.NODE_ENV || ''
  }

  public static get LOG_LEVEL(): string {
    return process.env.LOG_LEVEL || 'info'
  }

  public static get port(): number {
    if (process.env.PORT) {
      return +process.env.PORT
    } else {
      return 3000
    }
  }
}
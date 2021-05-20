import { LogLevelEnum } from '@yellowgarbagebag/common-lib'
import dotenv from 'dotenv'
dotenv.config()

/*
LOG_LEVEL=info
*/

export abstract class ProcessEnv {
  public static get NODE_ENV(): string {
    return process.env.NODE_ENV || ''
  }

  public static get LOG_LEVEL(): LogLevelEnum {
    return (process.env.LOG_LEVEL as LogLevelEnum) || LogLevelEnum.info
  }
}

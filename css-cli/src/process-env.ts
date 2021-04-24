import { LogLevelEnum } from '@yellowgarbagebag/common-lib'
import dotenv from 'dotenv'
dotenv.config()

/*
LOG_LEVEL=info
HTTPS=true
#SERVER=localhost:3000
SERVER=sphazure.westeurope.cloudapp.azure.com:3000
UNIQUE_IDENTIFIER=CS1
USERNAME=CS1
PASSWORD=test
*/

export abstract class ProcessEnv {
  public static get NODE_ENV(): string {
    return process.env.NODE_ENV || ''
  }

  public static get LOG_LEVEL(): LogLevelEnum {
    return (process.env.LOG_LEVEL as LogLevelEnum) || LogLevelEnum.info
  }

  public static get HTTPS(): boolean {
    return process.env.HTTPS === 'false' ? false : true
  }

  public static get SERVER(): string {
    return process.env.SERVER || ''
  }

  public static get UNIQUE_IDENTIFIER(): string {
    return process.env.UNIQUE_IDENTIFIER || ''
  }

  public static get USERNAME(): string {
    return process.env.USERNAME || ''
  }

  public static get PASSWORD(): string {
    return process.env.PASSWORD || ''
  }
}

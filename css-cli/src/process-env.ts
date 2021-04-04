import dotenv from 'dotenv'
dotenv.config()

/*
LOG_LEVEL=info
SERVER=sphazure.westeurope.cloudapp.azure.com:3000
UNIQUE_IDENTIFIER=LS001
USERNAME=LS001
PASSWORD=test
*/

export abstract class ProcessEnv {
  public static get NODE_ENV(): string {
    return process.env.NODE_ENV || ''
  }

  public static get LOG_LEVEL(): string {
    return process.env.LOG_LEVEL || 'info'
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
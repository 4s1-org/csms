/*
REACT_APP_LOG_LEVEL=info
REACT_APP_HTTPS=true
#REACT_APP_SERVER=localhost:3000
REACT_APP_SERVER=sphazure.westeurope.cloudapp.azure.com:3000
REACT_APP_UNIQUE_IDENTIFIER=CS1
REACT_APP_USERNAME=CS1
REACT_APP_PASSWORD=test
*/

import { LogLevelEnum } from '@4s1/common-lib'

export abstract class ProcessEnv {
  public static get NODE_ENV(): string {
    return process.env.NODE_ENV || ''
  }

  public static get LOG_LEVEL(): LogLevelEnum {
    return (process.env.REACT_APP_LOG_LEVEL as LogLevelEnum) || LogLevelEnum.info
  }

  public static get HTTPS(): boolean {
    return process.env.REACT_APP_HTTPS === 'false' ? false : true
  }

  public static get SERVER(): string {
    return process.env.REACT_APP_SERVER || ''
  }

  public static get UNIQUE_IDENTIFIER(): string {
    return process.env.REACT_APP_UNIQUE_IDENTIFIER || ''
  }

  public static get USERNAME(): string {
    return process.env.REACT_APP_USERNAME || ''
  }

  public static get PASSWORD(): string {
    return process.env.REACT_APP_PASSWORD || ''
  }
}

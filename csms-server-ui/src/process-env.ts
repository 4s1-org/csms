/*
REACT_APP_LOG_LEVEL=info
REACT_APP_SERVER=sphazure.westeurope.cloudapp.azure.com:3000
REACT_APP_USERNAME=admin
REACT_APP_PASSWORD=admin
*/

export abstract class ProcessEnv {
  public static get NODE_ENV(): string {
    return process.env.NODE_ENV || ''
  }

  public static get LOG_LEVEL(): string {
    return process.env.REACT_APP_LOG_LEVEL || 'info'
  }

  public static get SERVER(): string {
    return process.env.REACT_APP_SERVER || ''
  }

  public static get USERNAME(): string {
    return process.env.REACT_APP_USERNAME || ''
  }

  public static get PASSWORD(): string {
    return process.env.REACT_APP_PASSWORD || ''
  }
}

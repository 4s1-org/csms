export abstract class SkeletonBase {
  private _comment = ""
  private _importsClassValidator: string[] = []
  private _importsOwnClasses: [string, string][] = []

  public constructor(
    public readonly name: string
  ) {
    // nothing to do
  }

  public set comment(value: string) {
    value = value.replace(/&lt;/g, "<")
    value = value.replace(/&gt;/g, ">")
    this._comment = value.trim()
  }

  public formatFilename(name: string): string {
    name = name.replace(/OCPP/g, "Ocpp")
    name = name.replace(/OCSP/g, "Ocsp")
    name = name.replace(/EVSE/g, "Evse")
    name = name.replace(/VPN/g, "Vpn")
    name = name.replace(/APN/g, "Apn")
    name = name.replace(/EV/g, "Ev")
    name = name.replace(/AC/g, "Ac")
    name = name.replace(/DC/g, "Dc")

    let result = name[0].toLocaleLowerCase()
    for (let i = 1; i < name.length; i++) {
      if (name[i].match(/[A-Z]/) !== null) {
        result += "-" + name[i].toLowerCase()
      } else {
        result += name[i]
      }
    }
    return result
  }

  public get comment(): string {
    return this._comment
  }

  public get importClassValidator(): string[] {
    return this._importsClassValidator
  }

  public addImportClassValidatior(value: string): void {
    this._importsClassValidator.push(value)
  }

  public get imporOwnClass(): [string, string][] {
    return this._importsOwnClasses
  }

  public addImportOwnClass(name: string, path: string): void {
    this._importsOwnClasses.push([name, path])
  }

  public abstract toString(): string
}
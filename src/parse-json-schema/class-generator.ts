import path from "path"
import fs from "fs"

export class ClassGenerator {
  private static enums: { [name: string]: { description?: string, items: string[] } } = {}

  public static generateEnum(name: string, items: string[], description?: string): void {
    if (!(name in ClassGenerator.enums)) {
      ClassGenerator.enums[name] = { items, description }
    } else {
      const ele = ClassGenerator.enums[name]
      for (let i = 0; i < ele.items.length; i++) {
        if (ele.items[i] !== items[i]) {
          throw new Error(`${name} Enum: Items are unequal`)
        }
      }
    }
  }

  public static generateFiles(): void {
    for (const name in ClassGenerator.enums) {
      const ele = ClassGenerator.enums[name]
      const file = path.join(__dirname, "generated", "enums", `${ClassGenerator.filenameHandler(name)}.enum.ts`)

      const content: string[] = []
      if (ele.description) {
        content.push(`/**`)
        content.push(` * ${ele.description.trim()}`)
        content.push(` */`)
      }
      content.push(`export enum ${name}Enum {`)
      for (const item of ele.items) {
        content.push(`  ${item},`)
      }
      content.push(`}`)
      content.push("")

      fs.writeFileSync(file, content.join("\n"))
    }
  }

  private static filenameHandler(name: string): string {
    name = name.replace("OCPP", "Ocpp")
    name = name.replace("VPN", "Vpn")
    name = name.replace("APN", "Apn")
    name = name.replace("EV", "Ev")

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
}

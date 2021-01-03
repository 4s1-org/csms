import { EnumSkeleton } from "./skeletons/enum-skeleton"
import { ClassSkeleton } from "./skeletons/class-skeleton"
import { SkeletonBase } from "./skeletons/skeleton-base"
import path from "path"
import fs from "fs"

export class ClassGenerator {
  private enumSkeletons: EnumSkeleton[] = []
  private classSkeletons: ClassSkeleton[] = []

  private static _instance: ClassGenerator

  private constructor() {
    // nothing to do
  }

  public static get instance(): ClassGenerator {
    if (!ClassGenerator._instance) {
      ClassGenerator._instance = new ClassGenerator()
    }
    return ClassGenerator._instance
  }

  public addClass(skeleton: ClassSkeleton): void {
    // ToDo: Hier könnte man noch schauen, ob die vorhandene genau gleich ist.
    if (this.classSkeletons.filter(x => x.fullName === skeleton.fullName).length === 0) {
      this.classSkeletons.push(skeleton)
    }
  }


  public addEnum(skeleton: EnumSkeleton): void {
    // ToDo: Hier könnte man noch schauen, ob die vorhandene genau gleich ist.
    if (this.enumSkeletons.filter(x => x.fullName === skeleton.fullName).length === 0) {
      this.enumSkeletons.push(skeleton)
    }
  }

  public generateFiles(): void {
    this._generateMessageMarkerInterface([__dirname, "..", "..", "src"], "Request")
    this._generateMessageMarkerInterface([__dirname, "..", "..", "src"], "Response")

    this._generateFiles([__dirname, "..", "..", "src", "enumerations"], this.enumSkeletons)
    this._generateFiles([__dirname, "..", "..", "src", "messages"], this.classSkeletons.filter(x => x.isMessage))
    this._generateFiles([__dirname, "..", "..", "src", "datatypes"], this.classSkeletons.filter(x => !x.isMessage))

    this._generateMessageEnumList([__dirname, "..", "..", "src"],
      this.classSkeletons
        .filter(x => x.isMessage)
        .map(x => x.name.replace("Request", "").replace("Response", ""))
    )
  }

  private _generateFiles(folders: string[], skeletons: SkeletonBase[]): void {
    const exports: string[] = []
    for (const skeleton of skeletons) {
      skeleton.writeFile(folders)
      exports.push(`export { ${skeleton.fullName} } from "./${skeleton.fileNameWithoutExt}"`)
    }

    const fileName = path.join(...folders, "index.ts")
    fs.writeFileSync(fileName, exports.join("\n"), { encoding: "utf-8" })
  }

  private _generateMessageEnumList(folders: string[], messages: string[]): void {
    // Make unique
    messages = [...new Set(messages)]

    const data: string[] = []
    data.push(`export enum OcppMessageEnum {`)
    for (const message of messages) {
      data.push(`  ${message} = "${message}",`)
    }
    data.push(`}`)
    data.push(``)

    const fileName = path.join(...folders, "ocpp-message.enum.ts")
    fs.writeFileSync(fileName, data.join("\n"), { encoding: "utf-8" })
  }

  private _generateMessageMarkerInterface(folders: string[], type: "Request" | "Response"): void {
    const data: string[] = []
    data.push(`export interface I${type}Message {`)
    data.push(`  // nothing to do`)
    data.push(`}`)
    data.push(``)

    const fileName = path.join(...folders, `i-${type.toLocaleLowerCase()}-message.ts`)
    fs.writeFileSync(fileName, data.join("\n"), { encoding: "utf-8" })
  }
}

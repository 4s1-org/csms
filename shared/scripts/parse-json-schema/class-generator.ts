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
    if (this.classSkeletons.filter(x => x.className === skeleton.className).length === 0) {
      this.classSkeletons.push(skeleton)
    }
  }


  public addEnum(skeleton: EnumSkeleton): void {
    if (this.enumSkeletons.filter(x => x.className === skeleton.className).length === 0) {
      this.enumSkeletons.push(skeleton)
    }
  }

  public generateFiles(): void {
    this._generateFiles([__dirname, "..", "..", "src", "enumerations"], this.enumSkeletons)
    this._generateFiles([__dirname, "..", "..", "src", "messages"], this.classSkeletons.filter(x => x.isMessage))
    this._generateFiles([__dirname, "..", "..", "src", "types"], this.classSkeletons.filter(x => !x.isMessage))
  }

  private _generateFiles(folders: string[], skeletons: SkeletonBase[]): void {
    const exports: string[] = []
    for (const skeleton of skeletons) {
      const filename = skeleton.writeFile(folders)
      exports.push(`export { ${skeleton.className} } from "./${filename}"`)
    }

    const indexFilePath = path.join(...folders, "index.ts")
    fs.writeFileSync(indexFilePath, exports.join("\n"), { encoding: "utf-8" })
  }
}

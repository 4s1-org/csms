import { EnumSkeleton } from "./skeletons/enum-skeleton"
import { ClassSkeleton } from "./skeletons/class-skeleton"

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
    this.classSkeletons.push(skeleton)
  }


  public addEnum(skeleton: EnumSkeleton): void {
    this.enumSkeletons.push(skeleton)
  }

  public generateFiles(): void {
    for (const item of this.enumSkeletons) {
      item.writeFile([__dirname, "generated", "enums"])
    }

    for (const item of this.classSkeletons.filter(x => x.isRoot)) {
      item.writeFile([__dirname, "generated", "base-dtos"])
    }
    for (const item of this.classSkeletons.filter(x => !x.isRoot)) {
      item.writeFile([__dirname, "generated", "dtos"])
    }
  }
}

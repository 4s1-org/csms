import { SkeletonBase } from "./skeleton-base";

export class EnumSkeleton extends SkeletonBase {
  public constructor(name: string) {
    super(name)
  }

  public addEnums(value: string[]): void {

  }

  public toString(): string {
    const result: string[] = []

    // Headerinfo
    result.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    result.push(``)

    // Classcomment
    if (this.comment) {
      result.push("  /**")
      result.push(`   * ${this.comment}`)
      result.push("   */")
    }

    // Begin of class
    result.push(`export enum ${this.name} {`)

    // End of class
    result.push(`}`)

    // End
    return result.join("/n")
  }
}
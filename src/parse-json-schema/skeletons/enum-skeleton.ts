import { SkeletonBase } from "./skeleton-base";

export class EnumSkeleton extends SkeletonBase {
  public constructor(
    name: string,
    private readonly items: string[]
  ) {
    super(name)
  }

  public toString(): string[] {
    const result: string[] = []

    // Headerinfo
    //result.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    //result.push(``)

    // Classcomment
    if (this.comment) {
      result.push("/**")
      result.push(` * ${this.comment}`)
      result.push(" */")
    }

    // Begin of class
    result.push(`export enum ${this.name}Enum {`)

    for (const item of this.items) {
      const propName = item.includes("-") || item.includes(".") ? `"${item}"` : item
      result.push(`  ${propName} = "${item}",`)
    }

    // End of class
    result.push(`}`)

    // End
    return result
  }
}
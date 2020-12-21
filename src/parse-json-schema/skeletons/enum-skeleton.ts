import { SkeletonBase } from "./skeleton-base"

export class EnumSkeleton extends SkeletonBase {
  public constructor(
    name: string,
    private readonly items: string[]
  ) {
    super(name + "Enum")
  }

  public toString(): string[] {
    const result: string[] = []

    // Headerinfo
    //result.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    //result.push(``)

    // Classcomment
    for (const line of this.getComment()) {
      result.push(line)
    }

    // Begin of class
    result.push(`export enum ${this.name} {`)

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
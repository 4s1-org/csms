import { getCommentByEnum, getCommentByEnumValue } from "../comments/enum-comments"
import { SkeletonBase } from "./skeleton-base"

export class EnumSkeleton extends SkeletonBase {
  private _defaultValue: string | undefined

  public constructor(
    name: string,
    private readonly items: string[]
  ) {
    super(name, "Enum")
  }

  public setDefaultValue(value: string | undefined): void {
    this._defaultValue = value
  }

  public toString(): string[] {
    const result: string[] = []

    // Headerinfo
    result.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    result.push(``)

    // Classcomment
    const enumComment = getCommentByEnum(this.name + "EnumType")
    {
      // Gibt es einen Kommentar aus den PDFs Dokus?
      // Ansonsten nehme den aus den JSON-Schema Dateien.
      if (enumComment) {
        result.push(`/**`)
        result.push(` * ${enumComment.description}`)
        result.push(` */`)
      } else {
        for (const line of this.getComment()) {
          result.push(line)
        }
      }
    }

    // Begin of class
    result.push(`export enum ${this.name}${this.nameSuffix} {`)

    for (const item of this.items) {
      const valueComment = getCommentByEnumValue(enumComment, item)
      if (valueComment) {
        result.push(`  /** ${valueComment.description} */`)
      }
      const propName = item.includes("-") || item.includes(".") ? `"${item}"` : item
      result.push(`  ${propName} = "${item}",${item === this._defaultValue ? " // DEFAULT" : ""}`)
    }

    // End of class
    result.push(`}`)

    // End
    return result
  }
}

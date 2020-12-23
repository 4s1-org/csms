import { classCommentType } from "../class-comments"

export const StatusInfoType: classCommentType = {
  name: "StatusInfoType",
  description: "Element providing more information about the status.",
  fields: [{
    fieldName: "reasonCode",
    fieldType: "string[0..20]",
    cardinality: "1..1",
    description: "A predefined code for the reason why the status is returned in this response. The string is caseinsensitive.",
    isRequired: true
  }, {
    fieldName: "additionalInfo",
    fieldType: "string[0..512]",
    cardinality: "0..1",
    description: "Additional text to provide detailed information.",
    isRequired: false
  }]
}

import { classCommentType } from "../class-comments"

export const EVSEType: classCommentType = {
  name: "EVSEType",
  description: "Electric Vehicle Supply Equipment",
  fields: [{
    fieldName: "id",
    fieldType: "integer",
    cardinality: "1..1",
    description: "EVSE Identifier. This contains a number (> 0) designating an EVSE of the Charging Station.",
    isRequired: true
  }, {
    fieldName: "connectorId",
    fieldType: "integer",
    cardinality: "0..1",
    description: "An id to designate a specific connector (on an EVSE) by connector index number.",
    isRequired: false
  }]
}

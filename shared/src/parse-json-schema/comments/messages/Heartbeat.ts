import { classCommentType } from "../class-comments"

export const Heartbeat: classCommentType[] = [{
  name: "HeartbeatRequest",
  description: "This contains the field definition of the HeartbeatRequest PDU sent by the Charging Station to the CSMS. No fields are defined.",
  fields: [
    // no fields
  ]
}, {
  name: "HeartbeatResponse",
  description: "This contains the field definition of the HeartbeatResponse PDU sent by the CSMS to the Charging Station in response to a HeartbeatRequest.",
  fields: [{
    fieldName: "currentTime",
    fieldType: "dateTime",
    cardinality: "1..1",
    description: "Contains the current time of the CSMS.",
    isRequired: true
  }]
}]

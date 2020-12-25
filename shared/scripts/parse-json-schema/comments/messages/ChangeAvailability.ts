import { classCommentType } from "../class-comments"

export const ChangeAvailability: classCommentType[] = [{
  name: "ChangeAvailabilityRequest",
  description: "This contains the field definition of the ChangeAvailabilityRequest PDU sent by the CSMS to the Charging Station.",
  fields: [{
    fieldName: "operationalStatus",
    fieldType: "OperationalStatusEnumType",
    cardinality: "1..1",
    description: "This contains the type of availability change that the Charging Station should perform.",
    isRequired: true
  }, {
    fieldName: "evse",
    fieldType: "EVSEType",
    cardinality: "0..1",
    description: "Contains Id’s to designate a specific EVSE/connector by index numbers. When omitted, the message refers to the Charging Station as a whole.",
    isRequired: false
  }]
}, {
  name: "ChangeAvailabilityResponse",
  description: "This contains the field definition of the ChangeAvailabilityResponse PDU sent by the Charging Station to the CSMS.",
  fields: [{
    fieldName: "status",
    fieldType: "ChangeAvailabilityStatusEnumType",
    cardinality: "1..1",
    description: "This indicates whether the Charging Station is able to perform the availability change.",
    isRequired: true
  }, {
    fieldName: "statusInfo",
    fieldType: "StatusInfoType",
    cardinality: "0..1",
    description: "Detailed status information.",
    isRequired: false
  }]
}]

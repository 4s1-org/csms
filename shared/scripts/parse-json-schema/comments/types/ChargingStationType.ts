import { classCommentType } from "../class-comments"

export const ChargingStationType: classCommentType = {
  name: "ChargingStationType",
  description: "The physical system where an Electrical Vehicle (EV) can be charged.",
  fields: [{
    fieldName: "serialNumber",
    fieldType: "string[0..25]",
    cardinality: "0..1",
    description: "Vendor-specific device identifier.",
    isRequired: false
  }, {
    fieldName: "model",
    fieldType: "string[0..20]",
    cardinality: "1..1",
    description: "Defines the model of the device.",
    isRequired: true
  }, {
    fieldName: "vendorName",
    fieldType: "string[0..50]",
    cardinality: "1..1",
    description: "Identifies the vendor (not necessarily in a unique manner).",
    isRequired: true
  }, {
    fieldName: "firmwareVersion",
    fieldType: "string[0..50]",
    cardinality: "0..1",
    description: "This contains the firmware version of the Charging Station.",
    isRequired: false
  }, {
    fieldName: "modem",
    fieldType: "ModemType",
    cardinality: "0..1",
    description: "Defines the functional parameters of a communication link.",
    isRequired: false
  }]
}

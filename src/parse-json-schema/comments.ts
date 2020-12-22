type commentFieldType = {
  name: string
  fieldType: string
  cardinality: string
  description: string
  isRequired: boolean
}

type commentType = {
  name: string
  description: string
  toCsms: boolean
  fields: commentFieldType[]
}

export function getCommentForClass(classname: string): commentType | undefined {
  return comments.find(x => x.name === classname)
}

export const comments: commentType[] = [{
  name: "BootNotificationRequest",
  description: "This contains the field definition of the BootNotificationRequest PDU sent by the Charging Station to the CSMS.",
  toCsms: true,
  fields: [{
    name: "reason",
    fieldType: "BootReasonEnumType",
    cardinality: "1..1",
    description: "Required. This contains the reason for sending this message to the CSMS.",
    isRequired: true
  }, {
    name: "chargingStation",
    fieldType: "ChargingStationType",
    cardinality: "1..1",
    description: "Required. Identifies the Charging Station",
    isRequired: true
  }]
}, {
  name: "BootNotificationResponse",
  description: "This contains the field definition of the BootNotificationResponse PDU sent by the CSMS to the Charging Station in response to a BootNotificationRequest.",
  toCsms: false,
  fields: [{
    name: "currentTime",
    fieldType: "dateTime",
    cardinality: "1..1",
    description: "Required. This contains the CSMS’s current time.",
    isRequired: true
  }]
}]

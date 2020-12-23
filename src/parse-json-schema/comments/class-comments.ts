type classCommentFieldType = {
  name: string
  fieldType: string
  cardinality: string
  description: string
  isRequired: boolean
}

type classCommentType = {
  name: string
  description: string
  toCsms: boolean
  fields: classCommentFieldType[]
}

export function getCommentByClass(classname: string): classCommentType | undefined {
  return comments.find(x => x.name === classname)
}

export function getCommentByClassField(classComment: classCommentType | undefined, fieldName: string): classCommentFieldType | undefined {
  if (!classComment) {
    return undefined
  }
  return classComment.fields.find(x => x.name === fieldName)
}

const comments: classCommentType[] = [{
  name: "BootNotificationRequest",
  description: "This contains the field definition of the BootNotificationRequest PDU sent by the Charging Station to the CSMS.",
  toCsms: true,
  fields: [{
    name: "reason",
    fieldType: "BootReasonEnumType",
    cardinality: "1..1",
    description: "This contains the reason for sending this message to the CSMS.",
    isRequired: true
  }, {
    name: "chargingStation",
    fieldType: "ChargingStationType",
    cardinality: "1..1",
    description: "Identifies the Charging Station",
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
    description: "This contains the CSMS’s current time.",
    isRequired: true
  }]
}]

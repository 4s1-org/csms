import { classCommentType } from "../class-comments"

export const StatusNotification: classCommentType[] = [{
  name: "StatusNotificationRequest",
  description: "---",
  fields: [{
    fieldName: "timestamp",
    fieldType: "dateTime",
    cardinality: "1..1",
    description: "The time for which the status is reported. If absent time of receipt of the message will be assumed.",
    isRequired: true
  }, {
    fieldName: "connectorStatus",
    fieldType: "ConnectorStatusEnumType",
    cardinality: "1..1",
    description: "This contains the current status of the Connector.",
    isRequired: true
  }, {
    fieldName: "evseId",
    fieldType: "integer",
    cardinality: "1..1",
    description: "The id of the EVSE to which the connector belongs for which the the status is reported.",
    isRequired: true
  }, {
    fieldName: "connectorId",
    fieldType: "integer",
    cardinality: "1..1",
    description: "The id of the connector within the EVSE for which the status is reported.",
    isRequired: true
  }]
}, {
  name: "StatusNotificationResponse",
  description: "This contains the field definition of StatusNotificationResponse sent by the CSMS to the Charging Station in response to a StatusNotificationRequest. This message is deprecated. This message might be removed in a future version of OCPP. It will be replaced by Device Management Monitoring events.",
  fields: [
    // no fields
  ]
}]

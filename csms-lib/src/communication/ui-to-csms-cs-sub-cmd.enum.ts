/**
 * Subcommand which can be used from UI to the CSMS for the charging station area.
 */
export enum UiToCsmsCsSubCmdEnum {
  add = 'add',
  delete = 'delete',
  edit = 'edit',

  sendSetVariables = 'sendSetVariables',
  sendGetBaseReport = 'sendGetBaseReport',
  sendChangeAvailability = 'sendChangeAvailability',
  sendGetVariables = 'sendGetVariables',
  sendRequestReset = 'sendRequestReset',
  sendDataTransfer = 'sendDataTransfer',
}

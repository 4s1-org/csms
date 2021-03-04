// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { AuthorizeResponseDto } from '../messages/authorize-response.dto'
import { BootNotificationResponseDto } from '../messages/boot-notification-response.dto'
import { CancelReservationResponseDto } from '../messages/cancel-reservation-response.dto'
import { CertificateSignedResponseDto } from '../messages/certificate-signed-response.dto'
import { ChangeAvailabilityResponseDto } from '../messages/change-availability-response.dto'
import { ClearCacheResponseDto } from '../messages/clear-cache-response.dto'
import { ClearChargingProfileResponseDto } from '../messages/clear-charging-profile-response.dto'
import { ClearDisplayMessageResponseDto } from '../messages/clear-display-message-response.dto'
import { ClearVariableMonitoringResponseDto } from '../messages/clear-variable-monitoring-response.dto'
import { ClearedChargingLimitResponseDto } from '../messages/cleared-charging-limit-response.dto'
import { CostUpdatedResponseDto } from '../messages/cost-updated-response.dto'
import { CustomerInformationResponseDto } from '../messages/customer-information-response.dto'
import { DataTransferResponseDto } from '../messages/data-transfer-response.dto'
import { DeleteCertificateResponseDto } from '../messages/delete-certificate-response.dto'
import { FirmwareStatusNotificationResponseDto } from '../messages/firmware-status-notification-response.dto'
import { Get15118EvCertificateResponseDto } from '../messages/get15118-ev-certificate-response.dto'
import { GetBaseReportResponseDto } from '../messages/get-base-report-response.dto'
import { GetCertificateStatusResponseDto } from '../messages/get-certificate-status-response.dto'
import { GetChargingProfilesResponseDto } from '../messages/get-charging-profiles-response.dto'
import { GetCompositeScheduleResponseDto } from '../messages/get-composite-schedule-response.dto'
import { GetDisplayMessagesResponseDto } from '../messages/get-display-messages-response.dto'
import { GetInstalledCertificateIdsResponseDto } from '../messages/get-installed-certificate-ids-response.dto'
import { GetLocalListVersionResponseDto } from '../messages/get-local-list-version-response.dto'
import { GetLogResponseDto } from '../messages/get-log-response.dto'
import { GetMonitoringReportResponseDto } from '../messages/get-monitoring-report-response.dto'
import { GetReportResponseDto } from '../messages/get-report-response.dto'
import { GetTransactionStatusResponseDto } from '../messages/get-transaction-status-response.dto'
import { GetVariablesResponseDto } from '../messages/get-variables-response.dto'
import { HeartbeatResponseDto } from '../messages/heartbeat-response.dto'
import { InstallCertificateResponseDto } from '../messages/install-certificate-response.dto'
import { LogStatusNotificationResponseDto } from '../messages/log-status-notification-response.dto'
import { MeterValuesResponseDto } from '../messages/meter-values-response.dto'
import { NotifyChargingLimitResponseDto } from '../messages/notify-charging-limit-response.dto'
import { NotifyCustomerInformationResponseDto } from '../messages/notify-customer-information-response.dto'
import { NotifyDisplayMessagesResponseDto } from '../messages/notify-display-messages-response.dto'
import { NotifyEvChargingNeedsResponseDto } from '../messages/notify-ev-charging-needs-response.dto'
import { NotifyEvChargingScheduleResponseDto } from '../messages/notify-ev-charging-schedule-response.dto'
import { NotifyEventResponseDto } from '../messages/notify-event-response.dto'
import { NotifyMonitoringReportResponseDto } from '../messages/notify-monitoring-report-response.dto'
import { NotifyReportResponseDto } from '../messages/notify-report-response.dto'
import { PublishFirmwareResponseDto } from '../messages/publish-firmware-response.dto'
import { PublishFirmwareStatusNotificationResponseDto } from '../messages/publish-firmware-status-notification-response.dto'
import { ReportChargingProfilesResponseDto } from '../messages/report-charging-profiles-response.dto'
import { RequestStartTransactionResponseDto } from '../messages/request-start-transaction-response.dto'
import { RequestStopTransactionResponseDto } from '../messages/request-stop-transaction-response.dto'
import { ReservationStatusUpdateResponseDto } from '../messages/reservation-status-update-response.dto'
import { ReserveNowResponseDto } from '../messages/reserve-now-response.dto'
import { ResetResponseDto } from '../messages/reset-response.dto'
import { SecurityEventNotificationResponseDto } from '../messages/security-event-notification-response.dto'
import { SendLocalListResponseDto } from '../messages/send-local-list-response.dto'
import { SetChargingProfileResponseDto } from '../messages/set-charging-profile-response.dto'
import { SetDisplayMessageResponseDto } from '../messages/set-display-message-response.dto'
import { SetMonitoringBaseResponseDto } from '../messages/set-monitoring-base-response.dto'
import { SetMonitoringLevelResponseDto } from '../messages/set-monitoring-level-response.dto'
import { SetNetworkProfileResponseDto } from '../messages/set-network-profile-response.dto'
import { SetVariableMonitoringResponseDto } from '../messages/set-variable-monitoring-response.dto'
import { SetVariablesResponseDto } from '../messages/set-variables-response.dto'
import { SignCertificateResponseDto } from '../messages/sign-certificate-response.dto'
import { StatusNotificationResponseDto } from '../messages/status-notification-response.dto'
import { TransactionEventResponseDto } from '../messages/transaction-event-response.dto'
import { TriggerMessageResponseDto } from '../messages/trigger-message-response.dto'
import { UnlockConnectorResponseDto } from '../messages/unlock-connector-response.dto'
import { UnpublishFirmwareResponseDto } from '../messages/unpublish-firmware-response.dto'
import { UpdateFirmwareResponseDto } from '../messages/update-firmware-response.dto'
import { ResponseBaseDto } from './response-base.dto'

export const actionResponseDtoMapping: { [key: string]: { new (...args: any[]): ResponseBaseDto } } = {
  Authorize: AuthorizeResponseDto,
  BootNotification: BootNotificationResponseDto,
  CancelReservation: CancelReservationResponseDto,
  CertificateSigned: CertificateSignedResponseDto,
  ChangeAvailability: ChangeAvailabilityResponseDto,
  ClearCache: ClearCacheResponseDto,
  ClearChargingProfile: ClearChargingProfileResponseDto,
  ClearDisplayMessage: ClearDisplayMessageResponseDto,
  ClearVariableMonitoring: ClearVariableMonitoringResponseDto,
  ClearedChargingLimit: ClearedChargingLimitResponseDto,
  CostUpdated: CostUpdatedResponseDto,
  CustomerInformation: CustomerInformationResponseDto,
  DataTransfer: DataTransferResponseDto,
  DeleteCertificate: DeleteCertificateResponseDto,
  FirmwareStatusNotification: FirmwareStatusNotificationResponseDto,
  Get15118EvCertificate: Get15118EvCertificateResponseDto,
  GetBaseReport: GetBaseReportResponseDto,
  GetCertificateStatus: GetCertificateStatusResponseDto,
  GetChargingProfiles: GetChargingProfilesResponseDto,
  GetCompositeSchedule: GetCompositeScheduleResponseDto,
  GetDisplayMessages: GetDisplayMessagesResponseDto,
  GetInstalledCertificateIds: GetInstalledCertificateIdsResponseDto,
  GetLocalListVersion: GetLocalListVersionResponseDto,
  GetLog: GetLogResponseDto,
  GetMonitoringReport: GetMonitoringReportResponseDto,
  GetReport: GetReportResponseDto,
  GetTransactionStatus: GetTransactionStatusResponseDto,
  GetVariables: GetVariablesResponseDto,
  Heartbeat: HeartbeatResponseDto,
  InstallCertificate: InstallCertificateResponseDto,
  LogStatusNotification: LogStatusNotificationResponseDto,
  MeterValues: MeterValuesResponseDto,
  NotifyChargingLimit: NotifyChargingLimitResponseDto,
  NotifyCustomerInformation: NotifyCustomerInformationResponseDto,
  NotifyDisplayMessages: NotifyDisplayMessagesResponseDto,
  NotifyEvChargingNeeds: NotifyEvChargingNeedsResponseDto,
  NotifyEvChargingSchedule: NotifyEvChargingScheduleResponseDto,
  NotifyEvent: NotifyEventResponseDto,
  NotifyMonitoringReport: NotifyMonitoringReportResponseDto,
  NotifyReport: NotifyReportResponseDto,
  PublishFirmware: PublishFirmwareResponseDto,
  PublishFirmwareStatusNotification: PublishFirmwareStatusNotificationResponseDto,
  ReportChargingProfiles: ReportChargingProfilesResponseDto,
  RequestStartTransaction: RequestStartTransactionResponseDto,
  RequestStopTransaction: RequestStopTransactionResponseDto,
  ReservationStatusUpdate: ReservationStatusUpdateResponseDto,
  ReserveNow: ReserveNowResponseDto,
  Reset: ResetResponseDto,
  SecurityEventNotification: SecurityEventNotificationResponseDto,
  SendLocalList: SendLocalListResponseDto,
  SetChargingProfile: SetChargingProfileResponseDto,
  SetDisplayMessage: SetDisplayMessageResponseDto,
  SetMonitoringBase: SetMonitoringBaseResponseDto,
  SetMonitoringLevel: SetMonitoringLevelResponseDto,
  SetNetworkProfile: SetNetworkProfileResponseDto,
  SetVariableMonitoring: SetVariableMonitoringResponseDto,
  SetVariables: SetVariablesResponseDto,
  SignCertificate: SignCertificateResponseDto,
  StatusNotification: StatusNotificationResponseDto,
  TransactionEvent: TransactionEventResponseDto,
  TriggerMessage: TriggerMessageResponseDto,
  UnlockConnector: UnlockConnectorResponseDto,
  UnpublishFirmware: UnpublishFirmwareResponseDto,
  UpdateFirmware: UpdateFirmwareResponseDto,
}

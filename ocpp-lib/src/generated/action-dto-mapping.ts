// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { RpcActionEnum } from './rpc-action.enum'
import { AuthorizeRequestDto } from '../messages/authorize-request.dto'
import { AuthorizeResponseDto } from '../messages/authorize-response.dto'
import { BootNotificationRequestDto } from '../messages/boot-notification-request.dto'
import { BootNotificationResponseDto } from '../messages/boot-notification-response.dto'
import { CancelReservationRequestDto } from '../messages/cancel-reservation-request.dto'
import { CancelReservationResponseDto } from '../messages/cancel-reservation-response.dto'
import { CertificateSignedRequestDto } from '../messages/certificate-signed-request.dto'
import { CertificateSignedResponseDto } from '../messages/certificate-signed-response.dto'
import { ChangeAvailabilityRequestDto } from '../messages/change-availability-request.dto'
import { ChangeAvailabilityResponseDto } from '../messages/change-availability-response.dto'
import { ClearCacheRequestDto } from '../messages/clear-cache-request.dto'
import { ClearCacheResponseDto } from '../messages/clear-cache-response.dto'
import { ClearChargingProfileRequestDto } from '../messages/clear-charging-profile-request.dto'
import { ClearChargingProfileResponseDto } from '../messages/clear-charging-profile-response.dto'
import { ClearDisplayMessageRequestDto } from '../messages/clear-display-message-request.dto'
import { ClearDisplayMessageResponseDto } from '../messages/clear-display-message-response.dto'
import { ClearVariableMonitoringRequestDto } from '../messages/clear-variable-monitoring-request.dto'
import { ClearVariableMonitoringResponseDto } from '../messages/clear-variable-monitoring-response.dto'
import { ClearedChargingLimitRequestDto } from '../messages/cleared-charging-limit-request.dto'
import { ClearedChargingLimitResponseDto } from '../messages/cleared-charging-limit-response.dto'
import { CostUpdatedRequestDto } from '../messages/cost-updated-request.dto'
import { CostUpdatedResponseDto } from '../messages/cost-updated-response.dto'
import { CustomerInformationRequestDto } from '../messages/customer-information-request.dto'
import { CustomerInformationResponseDto } from '../messages/customer-information-response.dto'
import { DataTransferRequestDto } from '../messages/data-transfer-request.dto'
import { DataTransferResponseDto } from '../messages/data-transfer-response.dto'
import { DeleteCertificateRequestDto } from '../messages/delete-certificate-request.dto'
import { DeleteCertificateResponseDto } from '../messages/delete-certificate-response.dto'
import { FirmwareStatusNotificationRequestDto } from '../messages/firmware-status-notification-request.dto'
import { FirmwareStatusNotificationResponseDto } from '../messages/firmware-status-notification-response.dto'
import { Get15118EvCertificateRequestDto } from '../messages/get15118-ev-certificate-request.dto'
import { Get15118EvCertificateResponseDto } from '../messages/get15118-ev-certificate-response.dto'
import { GetBaseReportRequestDto } from '../messages/get-base-report-request.dto'
import { GetBaseReportResponseDto } from '../messages/get-base-report-response.dto'
import { GetCertificateStatusRequestDto } from '../messages/get-certificate-status-request.dto'
import { GetCertificateStatusResponseDto } from '../messages/get-certificate-status-response.dto'
import { GetChargingProfilesRequestDto } from '../messages/get-charging-profiles-request.dto'
import { GetChargingProfilesResponseDto } from '../messages/get-charging-profiles-response.dto'
import { GetCompositeScheduleRequestDto } from '../messages/get-composite-schedule-request.dto'
import { GetCompositeScheduleResponseDto } from '../messages/get-composite-schedule-response.dto'
import { GetDisplayMessagesRequestDto } from '../messages/get-display-messages-request.dto'
import { GetDisplayMessagesResponseDto } from '../messages/get-display-messages-response.dto'
import { GetInstalledCertificateIdsRequestDto } from '../messages/get-installed-certificate-ids-request.dto'
import { GetInstalledCertificateIdsResponseDto } from '../messages/get-installed-certificate-ids-response.dto'
import { GetLocalListVersionRequestDto } from '../messages/get-local-list-version-request.dto'
import { GetLocalListVersionResponseDto } from '../messages/get-local-list-version-response.dto'
import { GetLogRequestDto } from '../messages/get-log-request.dto'
import { GetLogResponseDto } from '../messages/get-log-response.dto'
import { GetMonitoringReportRequestDto } from '../messages/get-monitoring-report-request.dto'
import { GetMonitoringReportResponseDto } from '../messages/get-monitoring-report-response.dto'
import { GetReportRequestDto } from '../messages/get-report-request.dto'
import { GetReportResponseDto } from '../messages/get-report-response.dto'
import { GetTransactionStatusRequestDto } from '../messages/get-transaction-status-request.dto'
import { GetTransactionStatusResponseDto } from '../messages/get-transaction-status-response.dto'
import { GetVariablesRequestDto } from '../messages/get-variables-request.dto'
import { GetVariablesResponseDto } from '../messages/get-variables-response.dto'
import { HeartbeatRequestDto } from '../messages/heartbeat-request.dto'
import { HeartbeatResponseDto } from '../messages/heartbeat-response.dto'
import { InstallCertificateRequestDto } from '../messages/install-certificate-request.dto'
import { InstallCertificateResponseDto } from '../messages/install-certificate-response.dto'
import { LogStatusNotificationRequestDto } from '../messages/log-status-notification-request.dto'
import { LogStatusNotificationResponseDto } from '../messages/log-status-notification-response.dto'
import { MeterValuesRequestDto } from '../messages/meter-values-request.dto'
import { MeterValuesResponseDto } from '../messages/meter-values-response.dto'
import { NotifyChargingLimitRequestDto } from '../messages/notify-charging-limit-request.dto'
import { NotifyChargingLimitResponseDto } from '../messages/notify-charging-limit-response.dto'
import { NotifyCustomerInformationRequestDto } from '../messages/notify-customer-information-request.dto'
import { NotifyCustomerInformationResponseDto } from '../messages/notify-customer-information-response.dto'
import { NotifyDisplayMessagesRequestDto } from '../messages/notify-display-messages-request.dto'
import { NotifyDisplayMessagesResponseDto } from '../messages/notify-display-messages-response.dto'
import { NotifyEvChargingNeedsRequestDto } from '../messages/notify-ev-charging-needs-request.dto'
import { NotifyEvChargingNeedsResponseDto } from '../messages/notify-ev-charging-needs-response.dto'
import { NotifyEvChargingScheduleRequestDto } from '../messages/notify-ev-charging-schedule-request.dto'
import { NotifyEvChargingScheduleResponseDto } from '../messages/notify-ev-charging-schedule-response.dto'
import { NotifyEventRequestDto } from '../messages/notify-event-request.dto'
import { NotifyEventResponseDto } from '../messages/notify-event-response.dto'
import { NotifyMonitoringReportRequestDto } from '../messages/notify-monitoring-report-request.dto'
import { NotifyMonitoringReportResponseDto } from '../messages/notify-monitoring-report-response.dto'
import { NotifyReportRequestDto } from '../messages/notify-report-request.dto'
import { NotifyReportResponseDto } from '../messages/notify-report-response.dto'
import { PublishFirmwareRequestDto } from '../messages/publish-firmware-request.dto'
import { PublishFirmwareResponseDto } from '../messages/publish-firmware-response.dto'
import { PublishFirmwareStatusNotificationRequestDto } from '../messages/publish-firmware-status-notification-request.dto'
import { PublishFirmwareStatusNotificationResponseDto } from '../messages/publish-firmware-status-notification-response.dto'
import { ReportChargingProfilesRequestDto } from '../messages/report-charging-profiles-request.dto'
import { ReportChargingProfilesResponseDto } from '../messages/report-charging-profiles-response.dto'
import { RequestStartTransactionRequestDto } from '../messages/request-start-transaction-request.dto'
import { RequestStartTransactionResponseDto } from '../messages/request-start-transaction-response.dto'
import { RequestStopTransactionRequestDto } from '../messages/request-stop-transaction-request.dto'
import { RequestStopTransactionResponseDto } from '../messages/request-stop-transaction-response.dto'
import { ReservationStatusUpdateRequestDto } from '../messages/reservation-status-update-request.dto'
import { ReservationStatusUpdateResponseDto } from '../messages/reservation-status-update-response.dto'
import { ReserveNowRequestDto } from '../messages/reserve-now-request.dto'
import { ReserveNowResponseDto } from '../messages/reserve-now-response.dto'
import { ResetRequestDto } from '../messages/reset-request.dto'
import { ResetResponseDto } from '../messages/reset-response.dto'
import { SecurityEventNotificationRequestDto } from '../messages/security-event-notification-request.dto'
import { SecurityEventNotificationResponseDto } from '../messages/security-event-notification-response.dto'
import { SendLocalListRequestDto } from '../messages/send-local-list-request.dto'
import { SendLocalListResponseDto } from '../messages/send-local-list-response.dto'
import { SetChargingProfileRequestDto } from '../messages/set-charging-profile-request.dto'
import { SetChargingProfileResponseDto } from '../messages/set-charging-profile-response.dto'
import { SetDisplayMessageRequestDto } from '../messages/set-display-message-request.dto'
import { SetDisplayMessageResponseDto } from '../messages/set-display-message-response.dto'
import { SetMonitoringBaseRequestDto } from '../messages/set-monitoring-base-request.dto'
import { SetMonitoringBaseResponseDto } from '../messages/set-monitoring-base-response.dto'
import { SetMonitoringLevelRequestDto } from '../messages/set-monitoring-level-request.dto'
import { SetMonitoringLevelResponseDto } from '../messages/set-monitoring-level-response.dto'
import { SetNetworkProfileRequestDto } from '../messages/set-network-profile-request.dto'
import { SetNetworkProfileResponseDto } from '../messages/set-network-profile-response.dto'
import { SetVariableMonitoringRequestDto } from '../messages/set-variable-monitoring-request.dto'
import { SetVariableMonitoringResponseDto } from '../messages/set-variable-monitoring-response.dto'
import { SetVariablesRequestDto } from '../messages/set-variables-request.dto'
import { SetVariablesResponseDto } from '../messages/set-variables-response.dto'
import { SignCertificateRequestDto } from '../messages/sign-certificate-request.dto'
import { SignCertificateResponseDto } from '../messages/sign-certificate-response.dto'
import { StatusNotificationRequestDto } from '../messages/status-notification-request.dto'
import { StatusNotificationResponseDto } from '../messages/status-notification-response.dto'
import { TransactionEventRequestDto } from '../messages/transaction-event-request.dto'
import { TransactionEventResponseDto } from '../messages/transaction-event-response.dto'
import { TriggerMessageRequestDto } from '../messages/trigger-message-request.dto'
import { TriggerMessageResponseDto } from '../messages/trigger-message-response.dto'
import { UnlockConnectorRequestDto } from '../messages/unlock-connector-request.dto'
import { UnlockConnectorResponseDto } from '../messages/unlock-connector-response.dto'
import { UnpublishFirmwareRequestDto } from '../messages/unpublish-firmware-request.dto'
import { UnpublishFirmwareResponseDto } from '../messages/unpublish-firmware-response.dto'
import { UpdateFirmwareRequestDto } from '../messages/update-firmware-request.dto'
import { UpdateFirmwareResponseDto } from '../messages/update-firmware-response.dto'
import { RequestBaseDto } from './request-base.dto'
import { ResponseBaseDto } from './response-base.dto'

export const actionDtoMapping: {
  action: RpcActionEnum
  requestDto: { new (...args: any[]): RequestBaseDto }
  responseDto: { new (...args: any[]): ResponseBaseDto }
}[] = [
  {
    action: RpcActionEnum.Authorize,
    requestDto: AuthorizeRequestDto,
    responseDto: AuthorizeResponseDto,
  },
  {
    action: RpcActionEnum.BootNotification,
    requestDto: BootNotificationRequestDto,
    responseDto: BootNotificationResponseDto,
  },
  {
    action: RpcActionEnum.CancelReservation,
    requestDto: CancelReservationRequestDto,
    responseDto: CancelReservationResponseDto,
  },
  {
    action: RpcActionEnum.CertificateSigned,
    requestDto: CertificateSignedRequestDto,
    responseDto: CertificateSignedResponseDto,
  },
  {
    action: RpcActionEnum.ChangeAvailability,
    requestDto: ChangeAvailabilityRequestDto,
    responseDto: ChangeAvailabilityResponseDto,
  },
  {
    action: RpcActionEnum.ClearCache,
    requestDto: ClearCacheRequestDto,
    responseDto: ClearCacheResponseDto,
  },
  {
    action: RpcActionEnum.ClearChargingProfile,
    requestDto: ClearChargingProfileRequestDto,
    responseDto: ClearChargingProfileResponseDto,
  },
  {
    action: RpcActionEnum.ClearDisplayMessage,
    requestDto: ClearDisplayMessageRequestDto,
    responseDto: ClearDisplayMessageResponseDto,
  },
  {
    action: RpcActionEnum.ClearVariableMonitoring,
    requestDto: ClearVariableMonitoringRequestDto,
    responseDto: ClearVariableMonitoringResponseDto,
  },
  {
    action: RpcActionEnum.ClearedChargingLimit,
    requestDto: ClearedChargingLimitRequestDto,
    responseDto: ClearedChargingLimitResponseDto,
  },
  {
    action: RpcActionEnum.CostUpdated,
    requestDto: CostUpdatedRequestDto,
    responseDto: CostUpdatedResponseDto,
  },
  {
    action: RpcActionEnum.CustomerInformation,
    requestDto: CustomerInformationRequestDto,
    responseDto: CustomerInformationResponseDto,
  },
  {
    action: RpcActionEnum.DataTransfer,
    requestDto: DataTransferRequestDto,
    responseDto: DataTransferResponseDto,
  },
  {
    action: RpcActionEnum.DeleteCertificate,
    requestDto: DeleteCertificateRequestDto,
    responseDto: DeleteCertificateResponseDto,
  },
  {
    action: RpcActionEnum.FirmwareStatusNotification,
    requestDto: FirmwareStatusNotificationRequestDto,
    responseDto: FirmwareStatusNotificationResponseDto,
  },
  {
    action: RpcActionEnum.Get15118EvCertificate,
    requestDto: Get15118EvCertificateRequestDto,
    responseDto: Get15118EvCertificateResponseDto,
  },
  {
    action: RpcActionEnum.GetBaseReport,
    requestDto: GetBaseReportRequestDto,
    responseDto: GetBaseReportResponseDto,
  },
  {
    action: RpcActionEnum.GetCertificateStatus,
    requestDto: GetCertificateStatusRequestDto,
    responseDto: GetCertificateStatusResponseDto,
  },
  {
    action: RpcActionEnum.GetChargingProfiles,
    requestDto: GetChargingProfilesRequestDto,
    responseDto: GetChargingProfilesResponseDto,
  },
  {
    action: RpcActionEnum.GetCompositeSchedule,
    requestDto: GetCompositeScheduleRequestDto,
    responseDto: GetCompositeScheduleResponseDto,
  },
  {
    action: RpcActionEnum.GetDisplayMessages,
    requestDto: GetDisplayMessagesRequestDto,
    responseDto: GetDisplayMessagesResponseDto,
  },
  {
    action: RpcActionEnum.GetInstalledCertificateIds,
    requestDto: GetInstalledCertificateIdsRequestDto,
    responseDto: GetInstalledCertificateIdsResponseDto,
  },
  {
    action: RpcActionEnum.GetLocalListVersion,
    requestDto: GetLocalListVersionRequestDto,
    responseDto: GetLocalListVersionResponseDto,
  },
  {
    action: RpcActionEnum.GetLog,
    requestDto: GetLogRequestDto,
    responseDto: GetLogResponseDto,
  },
  {
    action: RpcActionEnum.GetMonitoringReport,
    requestDto: GetMonitoringReportRequestDto,
    responseDto: GetMonitoringReportResponseDto,
  },
  {
    action: RpcActionEnum.GetReport,
    requestDto: GetReportRequestDto,
    responseDto: GetReportResponseDto,
  },
  {
    action: RpcActionEnum.GetTransactionStatus,
    requestDto: GetTransactionStatusRequestDto,
    responseDto: GetTransactionStatusResponseDto,
  },
  {
    action: RpcActionEnum.GetVariables,
    requestDto: GetVariablesRequestDto,
    responseDto: GetVariablesResponseDto,
  },
  {
    action: RpcActionEnum.Heartbeat,
    requestDto: HeartbeatRequestDto,
    responseDto: HeartbeatResponseDto,
  },
  {
    action: RpcActionEnum.InstallCertificate,
    requestDto: InstallCertificateRequestDto,
    responseDto: InstallCertificateResponseDto,
  },
  {
    action: RpcActionEnum.LogStatusNotification,
    requestDto: LogStatusNotificationRequestDto,
    responseDto: LogStatusNotificationResponseDto,
  },
  {
    action: RpcActionEnum.MeterValues,
    requestDto: MeterValuesRequestDto,
    responseDto: MeterValuesResponseDto,
  },
  {
    action: RpcActionEnum.NotifyChargingLimit,
    requestDto: NotifyChargingLimitRequestDto,
    responseDto: NotifyChargingLimitResponseDto,
  },
  {
    action: RpcActionEnum.NotifyCustomerInformation,
    requestDto: NotifyCustomerInformationRequestDto,
    responseDto: NotifyCustomerInformationResponseDto,
  },
  {
    action: RpcActionEnum.NotifyDisplayMessages,
    requestDto: NotifyDisplayMessagesRequestDto,
    responseDto: NotifyDisplayMessagesResponseDto,
  },
  {
    action: RpcActionEnum.NotifyEvChargingNeeds,
    requestDto: NotifyEvChargingNeedsRequestDto,
    responseDto: NotifyEvChargingNeedsResponseDto,
  },
  {
    action: RpcActionEnum.NotifyEvChargingSchedule,
    requestDto: NotifyEvChargingScheduleRequestDto,
    responseDto: NotifyEvChargingScheduleResponseDto,
  },
  {
    action: RpcActionEnum.NotifyEvent,
    requestDto: NotifyEventRequestDto,
    responseDto: NotifyEventResponseDto,
  },
  {
    action: RpcActionEnum.NotifyMonitoringReport,
    requestDto: NotifyMonitoringReportRequestDto,
    responseDto: NotifyMonitoringReportResponseDto,
  },
  {
    action: RpcActionEnum.NotifyReport,
    requestDto: NotifyReportRequestDto,
    responseDto: NotifyReportResponseDto,
  },
  {
    action: RpcActionEnum.PublishFirmware,
    requestDto: PublishFirmwareRequestDto,
    responseDto: PublishFirmwareResponseDto,
  },
  {
    action: RpcActionEnum.PublishFirmwareStatusNotification,
    requestDto: PublishFirmwareStatusNotificationRequestDto,
    responseDto: PublishFirmwareStatusNotificationResponseDto,
  },
  {
    action: RpcActionEnum.ReportChargingProfiles,
    requestDto: ReportChargingProfilesRequestDto,
    responseDto: ReportChargingProfilesResponseDto,
  },
  {
    action: RpcActionEnum.RequestStartTransaction,
    requestDto: RequestStartTransactionRequestDto,
    responseDto: RequestStartTransactionResponseDto,
  },
  {
    action: RpcActionEnum.RequestStopTransaction,
    requestDto: RequestStopTransactionRequestDto,
    responseDto: RequestStopTransactionResponseDto,
  },
  {
    action: RpcActionEnum.ReservationStatusUpdate,
    requestDto: ReservationStatusUpdateRequestDto,
    responseDto: ReservationStatusUpdateResponseDto,
  },
  {
    action: RpcActionEnum.ReserveNow,
    requestDto: ReserveNowRequestDto,
    responseDto: ReserveNowResponseDto,
  },
  {
    action: RpcActionEnum.Reset,
    requestDto: ResetRequestDto,
    responseDto: ResetResponseDto,
  },
  {
    action: RpcActionEnum.SecurityEventNotification,
    requestDto: SecurityEventNotificationRequestDto,
    responseDto: SecurityEventNotificationResponseDto,
  },
  {
    action: RpcActionEnum.SendLocalList,
    requestDto: SendLocalListRequestDto,
    responseDto: SendLocalListResponseDto,
  },
  {
    action: RpcActionEnum.SetChargingProfile,
    requestDto: SetChargingProfileRequestDto,
    responseDto: SetChargingProfileResponseDto,
  },
  {
    action: RpcActionEnum.SetDisplayMessage,
    requestDto: SetDisplayMessageRequestDto,
    responseDto: SetDisplayMessageResponseDto,
  },
  {
    action: RpcActionEnum.SetMonitoringBase,
    requestDto: SetMonitoringBaseRequestDto,
    responseDto: SetMonitoringBaseResponseDto,
  },
  {
    action: RpcActionEnum.SetMonitoringLevel,
    requestDto: SetMonitoringLevelRequestDto,
    responseDto: SetMonitoringLevelResponseDto,
  },
  {
    action: RpcActionEnum.SetNetworkProfile,
    requestDto: SetNetworkProfileRequestDto,
    responseDto: SetNetworkProfileResponseDto,
  },
  {
    action: RpcActionEnum.SetVariableMonitoring,
    requestDto: SetVariableMonitoringRequestDto,
    responseDto: SetVariableMonitoringResponseDto,
  },
  {
    action: RpcActionEnum.SetVariables,
    requestDto: SetVariablesRequestDto,
    responseDto: SetVariablesResponseDto,
  },
  {
    action: RpcActionEnum.SignCertificate,
    requestDto: SignCertificateRequestDto,
    responseDto: SignCertificateResponseDto,
  },
  {
    action: RpcActionEnum.StatusNotification,
    requestDto: StatusNotificationRequestDto,
    responseDto: StatusNotificationResponseDto,
  },
  {
    action: RpcActionEnum.TransactionEvent,
    requestDto: TransactionEventRequestDto,
    responseDto: TransactionEventResponseDto,
  },
  {
    action: RpcActionEnum.TriggerMessage,
    requestDto: TriggerMessageRequestDto,
    responseDto: TriggerMessageResponseDto,
  },
  {
    action: RpcActionEnum.UnlockConnector,
    requestDto: UnlockConnectorRequestDto,
    responseDto: UnlockConnectorResponseDto,
  },
  {
    action: RpcActionEnum.UnpublishFirmware,
    requestDto: UnpublishFirmwareRequestDto,
    responseDto: UnpublishFirmwareResponseDto,
  },
  {
    action: RpcActionEnum.UpdateFirmware,
    requestDto: UpdateFirmwareRequestDto,
    responseDto: UpdateFirmwareResponseDto,
  },
]

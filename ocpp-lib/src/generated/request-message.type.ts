// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { AuthorizeRequestDto } from '../messages/authorize-request.dto'
import { BootNotificationRequestDto } from '../messages/boot-notification-request.dto'
import { CancelReservationRequestDto } from '../messages/cancel-reservation-request.dto'
import { CertificateSignedRequestDto } from '../messages/certificate-signed-request.dto'
import { ChangeAvailabilityRequestDto } from '../messages/change-availability-request.dto'
import { ClearCacheRequestDto } from '../messages/clear-cache-request.dto'
import { ClearChargingProfileRequestDto } from '../messages/clear-charging-profile-request.dto'
import { ClearDisplayMessageRequestDto } from '../messages/clear-display-message-request.dto'
import { ClearVariableMonitoringRequestDto } from '../messages/clear-variable-monitoring-request.dto'
import { ClearedChargingLimitRequestDto } from '../messages/cleared-charging-limit-request.dto'
import { CostUpdatedRequestDto } from '../messages/cost-updated-request.dto'
import { CustomerInformationRequestDto } from '../messages/customer-information-request.dto'
import { DataTransferRequestDto } from '../messages/data-transfer-request.dto'
import { DeleteCertificateRequestDto } from '../messages/delete-certificate-request.dto'
import { FirmwareStatusNotificationRequestDto } from '../messages/firmware-status-notification-request.dto'
import { Get15118EvCertificateRequestDto } from '../messages/get15118-ev-certificate-request.dto'
import { GetBaseReportRequestDto } from '../messages/get-base-report-request.dto'
import { GetCertificateStatusRequestDto } from '../messages/get-certificate-status-request.dto'
import { GetChargingProfilesRequestDto } from '../messages/get-charging-profiles-request.dto'
import { GetCompositeScheduleRequestDto } from '../messages/get-composite-schedule-request.dto'
import { GetDisplayMessagesRequestDto } from '../messages/get-display-messages-request.dto'
import { GetInstalledCertificateIdsRequestDto } from '../messages/get-installed-certificate-ids-request.dto'
import { GetLocalListVersionRequestDto } from '../messages/get-local-list-version-request.dto'
import { GetLogRequestDto } from '../messages/get-log-request.dto'
import { GetMonitoringReportRequestDto } from '../messages/get-monitoring-report-request.dto'
import { GetReportRequestDto } from '../messages/get-report-request.dto'
import { GetTransactionStatusRequestDto } from '../messages/get-transaction-status-request.dto'
import { GetVariablesRequestDto } from '../messages/get-variables-request.dto'
import { HeartbeatRequestDto } from '../messages/heartbeat-request.dto'
import { InstallCertificateRequestDto } from '../messages/install-certificate-request.dto'
import { LogStatusNotificationRequestDto } from '../messages/log-status-notification-request.dto'
import { MeterValuesRequestDto } from '../messages/meter-values-request.dto'
import { NotifyChargingLimitRequestDto } from '../messages/notify-charging-limit-request.dto'
import { NotifyCustomerInformationRequestDto } from '../messages/notify-customer-information-request.dto'
import { NotifyDisplayMessagesRequestDto } from '../messages/notify-display-messages-request.dto'
import { NotifyEvChargingNeedsRequestDto } from '../messages/notify-ev-charging-needs-request.dto'
import { NotifyEvChargingScheduleRequestDto } from '../messages/notify-ev-charging-schedule-request.dto'
import { NotifyEventRequestDto } from '../messages/notify-event-request.dto'
import { NotifyMonitoringReportRequestDto } from '../messages/notify-monitoring-report-request.dto'
import { NotifyReportRequestDto } from '../messages/notify-report-request.dto'
import { PublishFirmwareRequestDto } from '../messages/publish-firmware-request.dto'
import { PublishFirmwareStatusNotificationRequestDto } from '../messages/publish-firmware-status-notification-request.dto'
import { ReportChargingProfilesRequestDto } from '../messages/report-charging-profiles-request.dto'
import { RequestStartTransactionRequestDto } from '../messages/request-start-transaction-request.dto'
import { RequestStopTransactionRequestDto } from '../messages/request-stop-transaction-request.dto'
import { ReservationStatusUpdateRequestDto } from '../messages/reservation-status-update-request.dto'
import { ReserveNowRequestDto } from '../messages/reserve-now-request.dto'
import { ResetRequestDto } from '../messages/reset-request.dto'
import { SecurityEventNotificationRequestDto } from '../messages/security-event-notification-request.dto'
import { SendLocalListRequestDto } from '../messages/send-local-list-request.dto'
import { SetChargingProfileRequestDto } from '../messages/set-charging-profile-request.dto'
import { SetDisplayMessageRequestDto } from '../messages/set-display-message-request.dto'
import { SetMonitoringBaseRequestDto } from '../messages/set-monitoring-base-request.dto'
import { SetMonitoringLevelRequestDto } from '../messages/set-monitoring-level-request.dto'
import { SetNetworkProfileRequestDto } from '../messages/set-network-profile-request.dto'
import { SetVariableMonitoringRequestDto } from '../messages/set-variable-monitoring-request.dto'
import { SetVariablesRequestDto } from '../messages/set-variables-request.dto'
import { SignCertificateRequestDto } from '../messages/sign-certificate-request.dto'
import { StatusNotificationRequestDto } from '../messages/status-notification-request.dto'
import { TransactionEventRequestDto } from '../messages/transaction-event-request.dto'
import { TriggerMessageRequestDto } from '../messages/trigger-message-request.dto'
import { UnlockConnectorRequestDto } from '../messages/unlock-connector-request.dto'
import { UnpublishFirmwareRequestDto } from '../messages/unpublish-firmware-request.dto'
import { UpdateFirmwareRequestDto } from '../messages/update-firmware-request.dto'
export type RequestMessageType =
  AuthorizeRequestDto | 
  BootNotificationRequestDto | 
  CancelReservationRequestDto | 
  CertificateSignedRequestDto | 
  ChangeAvailabilityRequestDto | 
  ClearCacheRequestDto | 
  ClearChargingProfileRequestDto | 
  ClearDisplayMessageRequestDto | 
  ClearVariableMonitoringRequestDto | 
  ClearedChargingLimitRequestDto | 
  CostUpdatedRequestDto | 
  CustomerInformationRequestDto | 
  DataTransferRequestDto | 
  DeleteCertificateRequestDto | 
  FirmwareStatusNotificationRequestDto | 
  Get15118EvCertificateRequestDto | 
  GetBaseReportRequestDto | 
  GetCertificateStatusRequestDto | 
  GetChargingProfilesRequestDto | 
  GetCompositeScheduleRequestDto | 
  GetDisplayMessagesRequestDto | 
  GetInstalledCertificateIdsRequestDto | 
  GetLocalListVersionRequestDto | 
  GetLogRequestDto | 
  GetMonitoringReportRequestDto | 
  GetReportRequestDto | 
  GetTransactionStatusRequestDto | 
  GetVariablesRequestDto | 
  HeartbeatRequestDto | 
  InstallCertificateRequestDto | 
  LogStatusNotificationRequestDto | 
  MeterValuesRequestDto | 
  NotifyChargingLimitRequestDto | 
  NotifyCustomerInformationRequestDto | 
  NotifyDisplayMessagesRequestDto | 
  NotifyEvChargingNeedsRequestDto | 
  NotifyEvChargingScheduleRequestDto | 
  NotifyEventRequestDto | 
  NotifyMonitoringReportRequestDto | 
  NotifyReportRequestDto | 
  PublishFirmwareRequestDto | 
  PublishFirmwareStatusNotificationRequestDto | 
  ReportChargingProfilesRequestDto | 
  RequestStartTransactionRequestDto | 
  RequestStopTransactionRequestDto | 
  ReservationStatusUpdateRequestDto | 
  ReserveNowRequestDto | 
  ResetRequestDto | 
  SecurityEventNotificationRequestDto | 
  SendLocalListRequestDto | 
  SetChargingProfileRequestDto | 
  SetDisplayMessageRequestDto | 
  SetMonitoringBaseRequestDto | 
  SetMonitoringLevelRequestDto | 
  SetNetworkProfileRequestDto | 
  SetVariableMonitoringRequestDto | 
  SetVariablesRequestDto | 
  SignCertificateRequestDto | 
  StatusNotificationRequestDto | 
  TransactionEventRequestDto | 
  TriggerMessageRequestDto | 
  UnlockConnectorRequestDto | 
  UnpublishFirmwareRequestDto | 
  UpdateFirmwareRequestDto

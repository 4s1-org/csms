import { enumCommentType } from '../enum-comments'

export const BootReasonEnumType: enumCommentType = {
  name: 'BootReasonEnumType',
  description: '---',
  values: [
    {
      value: 'ApplicationReset',
      description: 'The Charging Station rebooted due to an application error.',
    },
    {
      value: 'FirmwareUpdate',
      description: 'The Charging Station rebooted due to a firmware update.',
    },
    {
      value: 'LocalReset',
      description: 'The Charging Station rebooted due to a local reset command.',
    },
    {
      value: 'PowerUp',
      description: 'The Charging Station powered up and registers itself with the CSMS.',
    },
    {
      value: 'RemoteReset',
      description: 'The Charging Station rebooted due to a remote reset command.',
    },
    {
      value: 'ScheduledReset',
      description: 'The Charging Station rebooted due to a scheduled reset command.',
    },
    {
      value: 'Triggered',
      description: 'Requested by the CSMS via a TriggerMessage',
    },
    {
      value: 'Unknown',
      description: 'The boot reason is unknown.',
    },
    {
      value: 'Watchdog',
      description: 'The Charging Station rebooted due to an elapsed watchdog timer.',
    },
  ],
}

import { enumCommentType } from '../enum-comments'

export const ChangeAvailabilityStatusEnumType: enumCommentType = {
  name: 'ChangeAvailabilityStatusEnumType',
  description: 'Status returned in response to ChangeAvailabilityRequest.',
  values: [
    {
      value: 'Accepted',
      description: 'Request has been accepted and will be executed.',
    },
    {
      value: 'Rejected',
      description: 'Request has not been accepted and will not be executed.',
    },
    {
      value: 'Scheduled',
      description: 'Request has been accepted and will be executed when transaction(s) in progress have finished.',
    },
  ],
}

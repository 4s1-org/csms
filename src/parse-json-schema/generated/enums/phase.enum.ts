/**
 * Sampled_ Value. Phase. Phase_ Code
urn:x-oca:ocpp:uid:1:569264
Indicates how the measured value is to be interpreted. For instance between L1 and neutral (L1-N) Please note that not all values of phase are applicable to all Measurands. When phase is absent, the measured value is interpreted as an overall value.
 */
export enum PhaseEnum {
  L1,
  L2,
  L3,
  N,
  L1-N,
  L2-N,
  L3-N,
  L1-L2,
  L2-L3,
  L3-L1,
}

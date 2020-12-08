/**
 * Attribute type for which value is requested. When absent, default Actual is assumed.
 */
export enum AttributeEnum {
  Actual = "Actual",
  Target = "Target",
  MinSet = "MinSet",
  MaxSet = "MaxSet",
}
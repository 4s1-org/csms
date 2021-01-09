import { OcppCallErrorDto } from '@yellowgarbagebag/csms-shared'

export class OcppError extends Error {
  constructor(public readonly dto: OcppCallErrorDto) {
    super()
  }
}

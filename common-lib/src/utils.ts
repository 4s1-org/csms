import base64url from 'base64url'
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function toBase64(...args: string[]): string {
  return base64url(args.join(':'))
}

export function fromBase64(val: string): string {
  return base64url.decode(val)
}

export function fromBase64Array(val: string): string[] {
  return base64url.decode(val).split(':')
}

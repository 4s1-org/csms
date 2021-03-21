import base64url from 'base64url'

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function toBase64(val: string): string {
  return base64url(val)
}

export function fromBase64(val: string): string {
  return base64url.decode(val)
}

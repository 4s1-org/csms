export interface IWebSocket {
  OPEN: boolean

  onopen: () => void
  onmessage: (msg: any) => void
  onerror: (msg: any) => void
  onclose: (msg: any) => void
  send: (msg: any) => void
}

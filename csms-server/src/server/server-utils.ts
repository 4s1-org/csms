import { TLSSocket } from 'tls'
import { IncomingHttpHeaders } from 'http'
import { IncomingMessage } from 'http'
import { fromBase64, Logger, verifyPassword } from '@yellowgarbagebag/common-lib'

export type HeaderType = {
  secWebsocketKey: string
  secWebsocketProtocol: string[]
}

export abstract class ServerUtils {
  public static parseHeaders(headers: IncomingHttpHeaders): HeaderType {
    const res: HeaderType = {
      secWebsocketKey: '',
      secWebsocketProtocol: [],
    }

    if (headers['sec-websocket-key']) {
      res.secWebsocketKey = headers['sec-websocket-key']
    }
    if (headers['sec-websocket-protocol']) {
      const parts = headers['sec-websocket-protocol'].split(', ')
      res.secWebsocketProtocol = parts
    }

    return res
  }

  public static getCredentials(request: IncomingMessage, header: HeaderType): { username: string; password: string } {
    if (request.headers.authorization && request.headers.authorization.startsWith('Basic ')) {
      const b64auth = request.headers.authorization.substring(6)
      const parts = Buffer.from(b64auth, 'base64').toString().split(':') // cut "Basic "
      if (parts.length === 2) {
        return {
          username: parts[0],
          password: parts[1],
        }
      }
    } else if (header.secWebsocketProtocol.length > 0) {
      for (const protocol of header.secWebsocketProtocol) {
        if (protocol.startsWith('Auth.')) {
          const b64auth = protocol.substring(5) // cut "Auth."
          const parts = fromBase64(b64auth).split(':')
          if (parts.length === 2) {
            return {
              username: parts[0],
              password: parts[1],
            }
          }
        }
      }
    }
    return { username: '', password: '' }
  }

  public static send401(tlsSocket: TLSSocket): void {
    tlsSocket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
    tlsSocket.destroy()
  }
}

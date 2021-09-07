import { Socket } from 'net'
import { TLSSocket } from 'tls'
import { IncomingHttpHeaders } from 'http'
import { IncomingMessage } from 'http'
import { fromBase64 } from '@4s1/common-lib'

export type HeaderType = {
  secWebsocketKey: string
  secWebsocketProtocol: string[]
}

/**
 * Class with a bunch of util functions for the server part.
 */
export abstract class ServerUtils {
  /**
   * Parses the header of an incoming HTTP message.
   */
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

  /**
   * Tries to find credentials in the incoming message or as websocket protocol (hacky login proceed).
   */
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

  /**
   * Sends a HTTP 401 via the socket connection and close the connection immediately.
   */
  public static send401(socket: Socket | TLSSocket): void {
    socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
    socket.destroy()
  }
}

import React from 'react'
import './App.css'
import { WebSocketClient, ChargingStation } from '@yellowgarbagebag/csms-charging-station-lib'

function App() {
  var authToken = 'TFMwMDE6dGVzdA=' // LS001:test
  document.cookie = 'X-Authorization=' + authToken + '; path=/'

  const cs = new ChargingStation('LS001', 'LS001', 'test')
  const ws = new WebSocket('wss://localhost:3000/ocpp/LS001', ['ocpp2.0.1'])

  const sendCallback = (msg: any): boolean => {
    if (ws && ws.OPEN) {
      ws.send(msg)
      return true
    }
    return false
  }

  const client = new WebSocketClient(cs, sendCallback)
  ws.onopen = () => {
    client.send(cs.sendBootNotificationRequest())
  }
  ws.onmessage = (msg: any): void => {
    client.onMessage(msg.data)
  }
  ws.onerror = (msg: any): void => {
    client.onError(msg)
  }
  ws.onclose = (): void => {
    client.onClose()
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

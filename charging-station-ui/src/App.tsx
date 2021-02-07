import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  WebSocketClient,
  ChargingStation,
} from "@yellowgarbagebag/csms-simulator";

function App() {
  var authToken = "TFMwMDE6dGVzdA="; // LS001:test
  document.cookie = "X-Authorization=" + authToken + "; path=/";

  const cs = new ChargingStation("LS001", "LS001", "test");
  const ws = new WebSocket("wss://localhost:3000/ocpp/LS001");
  const foo = new WebSocketClient(cs, ws as any);
  ws.onopen = () => {
    foo.sendRequest(cs.sendBootNotificationRequest());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

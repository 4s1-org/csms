import React from "react";
import "./App.css";

function App() {
  var authToken = "YWRtaW46YWRtaW4="; // admin:admin
  document.cookie = "X-Authorization=" + authToken + "; path=/";

  const ws = new WebSocket("wss://localhost:3000/admin", ["ocpp2.0.1"]);

  ws.onopen = () => {
    console.log("IT WORKS");
  };
  ws.onmessage = (msg: any): void => {};
  ws.onerror = (msg: any): void => {};
  ws.onclose = (): void => {};

  return (
    <div className="App">
      <header className="App-header">
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

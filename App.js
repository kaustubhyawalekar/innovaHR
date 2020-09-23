import React from "react";
import Chat from "./Chat.jsx";
import Sidebar from "./Sidebar.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="appbox">
        <div className="sidebar">
          {" "}
          <Sidebar />
        </div>

        <div className="chat">
          <Chat />
        </div>
      </header>
    </div>
  );
}

export default App;

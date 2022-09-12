import React from "react";
import apps from "../../../config.json";

const App = () => {
  const keys = Object.keys(apps).filter((k) => k !== "main");
  return (
    <div style={{ display: "flex", height: '100vh' }}>
      <aside style={{ width: 240 }}>
        <nav>
          <ul>
            {keys.map((k) => (
              <li key={k}>
                <a href={`http://localhost:5090/${k}`}>{k}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1 }}>
        <h1 style={{ textAlign: "center" }}>Main App Title</h1>
        <div id="container"></div>
      </main>
    </div>
  );
};

export default App;

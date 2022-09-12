import React, { useEffect, Suspense } from 'react';
import Garfish from 'garfish';

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'greenyellow',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Main App</h1>
      <div id="container"></div>
    </div>
  );
};

export default App;

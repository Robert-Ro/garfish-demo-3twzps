import React, { useEffect, Suspense } from 'react';
import Garfish from 'garfish';

const App = () => {
  useEffect(async () => {
    // docs: https://garfish.top/
    const app = await Garfish.loadApp('app2', {
      entry: 'http://localhost:3002',
      basename: '/',
      domGetter: '#container',
      sandbox: {
        fixBaseUrl: true,
      },
      props: {
        msg: 'hello world',
      },
    });
    await app.mount();
    const app3 = await Garfish.loadApp('app3', {
      entry: 'http://localhost:3003',
      basename: '/',
      domGetter: '#container2',
      sandbox: {
        fixBaseUrl: true,
      },
      props: {
        msg: 'hello world',
      },
    });
    await app3.mount();
  });

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
      <hr />
      <div id="container2"></div>
    </div>
  );
};

export default App;

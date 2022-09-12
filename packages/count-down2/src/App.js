import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { getWeekNumber } from '@maple/utils'

function Home() {
  const weekNum = getWeekNumber()
  return <div>Current Weeknum: {weekNum}</div>;
}

const App = ({ props }) => {
  return (
    <BrowserRouter>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'cyan',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

function Expenses() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Expenses</h2>
    </main>
  );
}

function Invoices() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Invoices</h2>
    </main>
  );
}

export default App;

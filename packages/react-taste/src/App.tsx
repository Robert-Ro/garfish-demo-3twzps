import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import V1 from './pages/v1'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 20,
          paddingRight: 20,
          position: 'fixed',
          width: 240,
        }}
      >
        <Link to="/v1">simple</Link>
        <Link to="/v2">handle loading and error</Link>
        <Link to="/v3">use hooks</Link>
        <Link to="/v4">handle race</Link>
        <Link to="/v5">use cache</Link>
        <Link to="/v6">cache invalidate</Link>
        <Link to="/v7">react 18 concurrent rending</Link>
      </nav>
      <main style={{ flex: 1, paddingLeft: 240 }}>
        <Routes>
          <Route path="/v1" element={<V1 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

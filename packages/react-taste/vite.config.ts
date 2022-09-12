import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { getPort } = require('../../util')
const appName = 'react-taste'
const port = getPort(appName);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `http://localhost:${port}`,
  server: {
    port,
    cors: true,
    origin:`http://localhost:${port}`,
  },
})

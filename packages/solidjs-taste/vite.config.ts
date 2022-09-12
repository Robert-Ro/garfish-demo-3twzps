import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const { getPort } = require('../../util')
const appName = 'solidjs-taste'
const port = getPort(appName)

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port,
    cors: true,
    origin:`http://localhost:${port}`,
  },
  base: `http://localhost:${port}`,
  build: {
    target: 'esnext',
  },
});

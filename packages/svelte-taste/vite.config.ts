import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const { getPort } = require('../../util')
const appName = 'svelte-taste'
const port = getPort(appName)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port,
    cors: true,
    origin:`http://localhost:${port}`,
  },
  base: `http://localhost:${port}/`,
})

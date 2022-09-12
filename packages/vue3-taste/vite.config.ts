import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from '@vitejs/plugin-legacy'
import path from "path";
import Inspect from "vite-plugin-inspect";
import WindiCSS from "vite-plugin-windicss";

const { getPort } = require('../../util')
const appName = 'vue3-taste'

const port = getPort(appName);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect(),
    vue({
      reactivityTransform: true, // ->  支持属性默认值选项
    }),
    legacy({
        targets: ['defaults', 'not IE 11'],
    }),
    WindiCSS(),
  ],
  resolve: {
    alias: [
      {
        // find: /@\//,
        find: "@/",
        replacement: path.resolve(__dirname, "src") + "/",
      },
    ],
  },
  base: `http://localhost:${port}`,
  server: {
    port,
    cors: true,
    origin:`http://localhost:${port}`,
  },
});

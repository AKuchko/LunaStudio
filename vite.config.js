import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "../util/createComponent.js"'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'views/index.html'),
        second: resolve(__dirname, 'src/pages/second.html')
      },
    },
  },
})
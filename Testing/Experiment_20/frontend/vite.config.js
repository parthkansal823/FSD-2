import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
  },

  preview: {
    host: true,
    port: 5173
  },

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: './src/setupTests.js'
  }
})
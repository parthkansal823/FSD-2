import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // make it accessible on port 3000 from outside also  

  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: './src/setupTests.js'
  }
})
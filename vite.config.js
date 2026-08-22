import { defineConfig } from 'vite'

// Static site — no framework. https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
})

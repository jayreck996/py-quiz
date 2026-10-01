import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/py-quiz/',
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})

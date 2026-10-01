import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/py-quiz/',
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  }
})

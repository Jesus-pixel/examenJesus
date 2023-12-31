import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
     usePolling: true,
    },
    host: true, // Here
    port: 5173,
    proxy: {
      '/api':{
        host: "http://localhost",
        port: 3000
      }
      
    }
  }
})

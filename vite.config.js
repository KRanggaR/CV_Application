import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CV_Application/',
  plugins: [react()],
  optimizeDeps: {
    include: ['html2canvas'],
  },
})

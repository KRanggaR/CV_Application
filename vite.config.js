import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CV_Application',
  optimizeDeps: {
    include: ['html2canvas'],
  },
})

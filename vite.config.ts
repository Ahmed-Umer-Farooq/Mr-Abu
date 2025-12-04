import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.ts',
  },
  build: {
    outDir: 'build',
    cssCodeSplit: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  }
})

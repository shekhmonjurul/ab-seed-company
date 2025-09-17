import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',       // production build directory
    sourcemap: false,     // source map production এ সাধারণত off রাখি
    minify: 'esbuild',    // minification (default)
    rollupOptions: {
      output: {
        manualChunks: undefined, // chunking strategy
      },
    },
  },
})

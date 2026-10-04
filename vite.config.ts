import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Served from https://ponkberry.github.io/final-fantasy-iv-pixel-remaster-achievement-guide/
  base: '/final-fantasy-iv-pixel-remaster-achievement-guide/',
  build: {
    outDir: 'docs',
  },
})

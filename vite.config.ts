import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path for GitHub Pages - use '/' for root domain or '/repo-name/' for project pages
  base: '/portfolio/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Alias figma:asset to src/assets for Figma Make compatibility
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
})

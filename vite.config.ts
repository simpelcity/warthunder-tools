import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/src": resolve(__dirname, "src"),
      "@/data": resolve(__dirname, "src/data"),
      "@/types": resolve(__dirname, "src/types"),
      "@/styles": resolve(__dirname, "src/styles"),
      "@/pages": resolve(__dirname, "src/pages"),
      "@/constants": resolve(__dirname, "src/constants")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ["color-functions", "global-builtin", "import", "if-function"]
      }
    }
  }
})

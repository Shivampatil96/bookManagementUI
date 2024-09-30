import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    dir: './src/tests',
    environment: "jsdom",
    globals: true,
    setupFiles: './src/tests/setup.ts',
    exclude: [
      "**/node-modules/**",
      "**/ui-test/**"
    ],
    coverage: {
      enabled : true,
      reporter: ['html'],
      exclude: [
       "src/store"
      ]
    } 
  }
})

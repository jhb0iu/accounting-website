import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 官网项目，GitHub Pages 兼容
export default defineConfig({
  plugins: [react()],
  base: './',
})

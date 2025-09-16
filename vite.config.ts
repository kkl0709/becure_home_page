import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포시 아래 주석 해제하고 레포 이름으로 변경
  // base: '/becure-home/',
})

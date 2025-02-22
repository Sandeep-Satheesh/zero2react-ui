import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const isGitHubPages = process.env.NODE_ENV === 'production';
console.log(process.env);

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/zero2react-ui/" : "/",
})

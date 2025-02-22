import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
console.log(process.env);
const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/zero2react-ui/" : "/",
})

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.NODE_ENV === "production";
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  base: isGitHubPages ? "/zero2react-ui/" : "/", // Dynamic base URL
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
import { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import ssr from 'vite-plugin-ssr/plugin'
import path from 'path'
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
// @ts-ignore
import config from "./tailwind.config.js";
const config: UserConfig = {
   css: {
    postcss: {
      plugins: [
        tailwindcss(config),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react(), svgr(), ssr()],
}

export default config

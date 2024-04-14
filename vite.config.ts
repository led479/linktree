import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [ resolve(__dirname, 'src/assets/icons') ],
      symbolId: 'icon-[dir]-[name]'
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/")
    }
  }
})

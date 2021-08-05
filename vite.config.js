import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require('path')
import path, {resolve} from 'path'

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/@/styles/global.scss";`
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
        // '@': path.resolve(__dirname, 'src'),
        "/@": pathResolve("src"),
        // 'views': path.resolve(__dirname, 'src/view'),
        'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})

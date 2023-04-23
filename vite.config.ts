import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [uni()],
  define: {
    'process.env.VUE_NODE_ENV': JSON.stringify('test')
  },
  server: {
    port: 3333,
    open: true,
    proxy: {
      '/api': {
        target: 'https://baobab.kaiyanapp.com',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\api/, '')
      }
    }
  }
})

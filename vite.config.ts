import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build({
      minify: true,
      emptyOutDir: true
    }),
    devServer({
      adapter,
      entry: 'src/index.tsx'
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      },
      mangle: true
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})

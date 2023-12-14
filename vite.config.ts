import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_APP_NAME, VITE_BASE_URL, VITE_NODE_ENV, APP_ENV } = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify(APP_ENV),
    },
    base: './',
    plugins: [vue()],
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `
    //       @use '@/assets/css/constant.scss' as *;
    //       @use "@/assets/css/var.scss" as *;
    //       `,
    //     },
    //   },
    // },
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    server: {
      open: true,
      port: 3000,
      host: true,
      proxy: {
        '/m1/3726619-0-default': {
          target: VITE_BASE_URL
        }
      }
    },
    build: {
      outDir: 'dist',
    }
  }

})

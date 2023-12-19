import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_APP_NAME, VITE_BASE_URL, VITE_NODE_ENV, APP_ENV } = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify(APP_ENV),
    },
    base: './',
    plugins: [
      vue(),
      viteCompression({
        filter: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 需要压缩的文件
        threshold: 1024, // 文件容量大于这个值进行压缩
        algorithm: 'gzip', // 压缩方式
        ext: 'gz', // 后缀名
        deleteOriginFile: false, // 压缩后是否删除压缩源文件
      })
    ],
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
        // '/m1/3726619-0-default': {
        //   target: VITE_BASE_URL
        // }
        '/api': {
          target: VITE_BASE_URL
        },
        '/3726619-0-default': {
          target: VITE_BASE_URL
        }
      }
    },
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1000, // 提高超大静态资源警告大小
      rollupOptions: {
        output: {
          entryFileNames: "index.js",
          assetFileNames: "assets/[ext]/[name]-[hash][extname]",
          chunkFileNames: "js/[name]-[hash].js",
        }
      },
      // 清楚全局打印 debug
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        }
      },
    }
  }

})

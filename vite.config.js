import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ViteImageOptimizer({
    //   include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'],
    //   svgo: {
    //     plugins: [
    //       {
    //         name: 'preset-default',
    //         params: {
    //           overrides: {
    //             removeViewBox: false,
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});

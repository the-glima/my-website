import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@css': '/src/assets/styles',
      '@images': '/src/assets/images',
      '@shared': '/src/shared',
    },
  },
  plugins: [react(), tsConfigPaths(), svgr()],
  build: {
    commonjsOptions: {
      esmExternals: true, // This can be helpful for modules with mixed ES and CommonJS exports
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
      },
      scss: {
        silenceDeprecations: ['import'],
      },
    },
  },
});

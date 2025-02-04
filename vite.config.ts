import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('lucide')) {
              return 'icons';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  base: '/',
  envPrefix: 'VITE_'
});

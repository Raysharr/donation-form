/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          'Work Sans:wght@400;500;600;700',
          'Rubik:wght@500',
          'Inter:wght@400',
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js',
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
export default defineConfig({
  base: '/aether-9/',
  plugins: [react()],
  build: { rollupOptions: { input: {
    home: resolve(__dirname, 'index.html'),
    explore: resolve(__dirname, 'explore.html'),
    missions: resolve(__dirname, 'missions.html'),
    crew: resolve(__dirname, 'crew.html'),
    planner: resolve(__dirname, 'planner.html'),
    about: resolve(__dirname, 'about.html')
  } } }
});
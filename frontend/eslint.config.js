import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/skitbit/', // 🔥 Required for GitHub Pages
  build: {
    outDir: 'dist', // Ensure correct output directory
  },
  server: {
    host: true, // Allow external access (useful for testing on local network)
  },
});

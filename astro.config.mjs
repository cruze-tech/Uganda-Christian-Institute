import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://uci-lira-demo.netlify.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true
    }
  }
});

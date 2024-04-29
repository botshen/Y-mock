import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';

// See https://wxt.dev/api/config.html
export default defineConfig({ 
  manifest: {
    permissions: [],
    web_accessible_resources: [
      {
        resources: ["/injected.js", "/assets/injected.css"],
        matches: ['<all_urls>'],
      },
    ],
  },
  srcDir: 'src',
  vite: () => ({
    plugins: [react()],
  }),
});

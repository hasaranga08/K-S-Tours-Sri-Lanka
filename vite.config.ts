import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // Support dynamic base path via VITE_BASE_PATH environment variable:
  // - On GitHub Pages project site: '/K-S-Tours-Sri-Lanka/'
  // - On custom domain (www.kstourssrilanka.com): '/'
  let base = '/K-S-Tours-Sri-Lanka/';
  if (process.env.VITE_BASE_PATH !== undefined) {
    const raw = process.env.VITE_BASE_PATH.trim();
    if (!raw || raw === '/') {
      base = '/';
    } else {
      base = raw.endsWith('/') ? raw : `${raw}/`;
    }
  }

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

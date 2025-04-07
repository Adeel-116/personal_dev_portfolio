import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcssVite from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcssVite()],
  server: {
    allowedHosts: ['ef29-111-88-36-164.ngrok-free.app', 'localhost', '127.0.0.1']
  }
})



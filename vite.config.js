import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace `username` and `repository` with your GitHub details
export default defineConfig({
    plugins: [react()],
    base: '/dravi/', // Set this to your GitHub repository name
});
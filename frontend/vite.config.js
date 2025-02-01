import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  console.log(`Current Mode: ${mode}`);

  return {
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode), // Node.js와 일관성 유지
    },
  };
});

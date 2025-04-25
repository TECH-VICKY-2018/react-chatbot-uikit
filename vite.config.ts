import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactChatbotUikit',
      formats: ['es', 'umd'],
      fileName: (format) => `react-chatbot-uikit.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'uuid',
        'react-icons',
        'react-icons/tb',
        'framer-motion',
        'react-markdown',
        'remark-gfm',
        'rehype-raw',
        'lucide-react',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          uuid: 'uuid',
          'react-icons': 'ReactIcons',
          'react-icons/tb': 'ReactIconsTb',
          'framer-motion': 'FramerMotion',
          'react-markdown': 'ReactMarkdown',
          'remark-gfm': 'remarkGfm',
          'rehype-raw': 'rehypeRaw',
          'lucide-react': 'LucideReact',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

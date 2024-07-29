import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
      '@pages': path.resolve(__dirname, './src/pages')
    },
  },
});

// `@` to refer to the src directory.
// `@assets` to refer to the src/assets directory.
// `@components` to refer to the src/components directory.
// `@data` to refer to the src/data directory.

// Setting aliases in your project offers several benefits, especially in larger projects where managing import paths can become cumbersome. Here’s why setting aliases is useful:

/*
// Without alias
import ProductList from '../../components/ProductList';
import productImage from '../../assets/images/product1.webp';

// With alias
import ProductList from '@components/ProductList';
import productImage from '@assets/images/product1.webp';

*/
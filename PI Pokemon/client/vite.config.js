// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@components': path.resolve(__dirname, 'src/components'),
//       // Agrega más alias según sea necesario
//     },
//   },
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

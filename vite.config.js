const { defineConfig } = require('vite');

module.exports = defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});

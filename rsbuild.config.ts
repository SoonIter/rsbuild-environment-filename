import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  environments: {
    web: {
      output: {
        distPath: {
          root: 'doc_build',
        },
      },
    },
    node: {
      output: {
        target: 'node',
        distPath: {
          root: 'dist_ssr',
        },
        filename: {
          js: 'main.cjs',
        },
      },
    },
  },
});

import reactRefresh from '@vitejs/plugin-react-refresh';
import {resolve} from 'path';
import {defineConfig} from 'vite';
import svgr from 'vite-plugin-svgr';
import config from './tsconfig.json';

const alias = Object.entries(config.compilerOptions.paths).reduce((acc, [key, [value]]) => {
  const aliasKey = key.substring(0, key.length - 2);
  const path = value.substring(0, value.length - 2);
  return {
    ...acc,
    [aliasKey]: resolve(__dirname, path),
  };
}, {});

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [reactRefresh(), svgr(), {
    name: 'simpleanalytics',
    transformIndexHtml(html) {
      const file = mode === 'development' ? 'latest.dev.js' : 'latest.js';
      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              async: true,
              src: `https://scripts.simpleanalyticscdn.com/${file}`
            },
            injectTo: 'head'
          }
        ],
      };
    },
  },],
  resolve: {
    alias,
  },
}));

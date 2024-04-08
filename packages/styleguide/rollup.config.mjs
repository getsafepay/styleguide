import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const config = [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      typescript(),
      terser({
        keep_fnames: /.+ColorMode/
      }),
      copy({
        targets: [
          { src: './src/styles/sfpy-theme.css', dest: 'dist' },
          { src: './src/styles/global.css', dest: 'dist' },
        ],
      }),
    ],
    external: [
      '@sfpy/styleguide-base',
      'next/link',
      'react',
      'tailwind-merge'
    ],
  },
];

export default config;

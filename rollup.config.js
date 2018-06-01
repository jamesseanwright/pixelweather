import typescriptPlugin from 'rollup-plugin-typescript2';
import typescript from 'typescript';
import { uglify } from 'rollup-plugin-uglify';
import { minify as esMinify } from 'uglify-es';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/client/index.min.js',
        format: 'iife',
    },
    plugins: [
        typescriptPlugin({
            typescript,
            tsconfig: 'tsconfig.client.json',
        }),
        uglify(null, esMinify),
    ],
};

const typescript = require('@rollup/plugin-typescript');

const { builtinModules } = require('module');
const pkg = require('./package.json');

module.exports = {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			preferConst: true,
		},
		{
			file: pkg.module,
			format: 'esm',
			preferConst: true,
		},
	],
	plugins: [
		typescript(),
	],
	external: [...builtinModules, ...Object.keys(pkg.dependencies)],
};

const obfuscator = require('rollup-plugin-obfuscator');

const { builtinModules } = require('module');
const pkg = require('./package.json');

module.exports = {
	input: 'src/index.js',
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
		obfuscator({
			fileOptions: false,
			globalOptions: {
				compact: true,
				controlFlowFlattening: false,
				deadCodeInjection: false,
				debugProtection: false,
				debugProtectionInterval: false,
				disableConsoleOutput: false,
				identifierNamesGenerator: 'hexadecimal',
				log: false,
				numbersToExpressions: false,
				renameGlobals: false,
				rotateStringArray: true,
				selfDefending: false,
				shuffleStringArray: true,
				simplify: true,
				splitStrings: false,
				stringArray: true,
				stringArrayEncoding: ['base64'],
				stringArrayIndexShift: true,
				stringArrayWrappersCount: 1,
				stringArrayWrappersChainedCalls: true,
				stringArrayWrappersParametersMaxCount: 2,
				stringArrayWrappersType: 'variable',
				stringArrayThreshold: 0.75,
				unicodeEscapeSequence: false
			},
		}),
	],
	external: [...builtinModules, ...Object.keys(pkg.dependencies)],
};

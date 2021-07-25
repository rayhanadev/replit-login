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
				controlFlowFlattening: true,
				controlFlowFlatteningThreshold: 0.75,
				deadCodeInjection: true,
				deadCodeInjectionThreshold: 0.4,
				debugProtection: false,
				debugProtectionInterval: false,
				disableConsoleOutput: true,
				identifierNamesGenerator: 'hexadecimal',
				log: false,
				numbersToExpressions: true,
				renameGlobals: false,
				rotateStringArray: true,
				selfDefending: true,
				shuffleStringArray: true,
				simplify: true,
				splitStrings: true,
				splitStringsChunkLength: 10,
				stringArray: true,
				stringArrayEncoding: ['base64'],
				stringArrayIndexShift: true,
				stringArrayWrappersCount: 2,
				stringArrayWrappersChainedCalls: true,
				stringArrayWrappersParametersMaxCount: 4,
				stringArrayWrappersType: 'function',
				stringArrayThreshold: 0.75,
				transformObjectKeys: true,
				unicodeEscapeSequence: false,
			},
		}),
	],
	external: [...builtinModules, ...Object.keys(pkg.dependencies)],
};

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
				controlFlowFlatteningThreshold: 1,
				deadCodeInjection: false,
				deadCodeInjectionThreshold: 1,
				debugProtection: false,
				debugProtectionInterval: false,
				disableConsoleOutput: false,
				identifierNamesGenerator: 'hexadecimal',
				log: false,
				numbersToExpressions: true,
				renameGlobals: false,
				reservedNames: [
					'process.env.REPLIT_LOGIN_PACKAGE_SALT',
					'process.env.REPLIT_LOGIN_PACKAGE_PASSWORD'
				],
				rotateStringArray: true,
				selfDefending: true,
				shuffleStringArray: true,
				simplify: true,
				splitStrings: true,
				splitStringsChunkLength: 5,
				stringArray: true,
				stringArrayEncoding: ['rc4'],
				stringArrayIndexShift: true,
				stringArrayWrappersCount: 5,
				stringArrayWrappersChainedCalls: true,    
				stringArrayWrappersParametersMaxCount: 5,
				stringArrayWrappersType: 'function',
				stringArrayThreshold: 1,
				transformObjectKeys: true,
				unicodeEscapeSequence: false
			},
		}),
	],
	external: [...builtinModules, ...Object.keys(pkg.dependencies)],
};

import globals from 'globals';
import eslintJs from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			globals: globals.node,
		},
		plugins: {
			'@typescript-eslint': tsEslint,
			'eslint-plugin-prettier': eslintPluginPrettier,
		},
		rules: {
			...eslintJs.configs.recommended.rules,
			...tsEslint.configs.recommended.rules,
			'@typescript-eslint/no-require-imports': 'false',
		},
	},
];

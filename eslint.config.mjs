import tseslint from 'typescript-eslint';

export default tseslint.config(
	tseslint.configs.strict,
	{
		rules: {
			'@typescript-eslint/no-unused-vars': ['warn'],
		},
	},
	{
		ignores: ['**/*.js'],
	}
);

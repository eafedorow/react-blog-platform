// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:i18next/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'sourceType': 'module',
		// eslint-disable-next-line no-undef
		tsconfigRootDir: __dirname,
		project: 'tsconfig.json',
		createDefaultProgram: true,
	},
	'settings': {
		'react': {
			'version': 'detect',
		},
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'i18next',
		'react-hooks'
	],
	'rules': {
		'react/jsx-indent-props': [
			'error',
			'tab'
		],
		'indent': [
			'error',
			'tab'
		],
		'react/jsx-filename-extension': [
			'error',
			{
				'extensions': ['.js', '.jsx', '.tsx']
			}
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'import/extensions': 'off',
		// eslint-disable-next-line no-undef
		'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
		'no-underscore-dangle': 'off',
		'no-multiple-empty-lines': 'error',
		'i18next/no-literal-string': ['error',
			{
				'markupOnly': true,
				'ignoreAttribute': ['data-testid', 'to']
			}
		],
		'max-len': [
			'error',
			{
				'code': 100,
				'ignoreComments': true
			}
		],
		'react/button-has-type': [
			'error',
			{
				'button': true,
				'submit': true,
				'reset': true
			}
		],
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'jsx-ally/no-static-element-interactions': 'off',
	},
	'globals': {
		'__IS_DEV__': true,
	},
	'overrides': [
		{
			files: ['**/src/**/*.{stories,test}.{ts, tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
				'max-len': 'off'
			},
		}
	]
};

/** @type {import("prettier").Config} */
export default {
	// Basic formatting
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	trailingComma: 'es5',
	printWidth: 80,
	endOfLine: 'lf',

	// Plugin for Astro support
	plugins: ['prettier-plugin-astro'],

	// Astro-specific overrides
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: '*.json',
			options: {
				useTabs: false,
			},
		},
	],
};

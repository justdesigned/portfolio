module.exports = {
	extends: ['stylelint-config-standard'],
	rules: {
		// Tailwind-specific
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'layer',
					'config',
					'variants',
					'responsive',
					'screen',
					'theme',
				],
			},
		],

		// Custom properties (CSS variables)
		'custom-property-pattern': null,
		'selector-class-pattern': null,

		// Allow @import for Tailwind
		'import-notation': null,

		// Disable conflicting rules with Tailwind
		'function-no-unknown': [
			true,
			{
				ignoreFunctions: ['theme', 'screen'],
			},
		],

		// General best practices
		'declaration-no-important': null, // Tailwind uses !important
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global'],
			},
		],
	},
	ignoreFiles: ['dist/**', '.astro/**', 'node_modules/**'],
};

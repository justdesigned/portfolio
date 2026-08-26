import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
	// Global ignores
	{
		ignores: [
			'dist/**',
			'.astro/**',
			'node_modules/**',
			'pnpm-lock.yaml',
			'*.config.mjs',
			'*.config.js',
		],
	},

	// Base configuration for all files
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
		rules: {
			'no-unused-vars': 'off', // Handled by TypeScript
			'no-undef': 'off', // Handled by TypeScript
			'prefer-const': 'warn',
			'no-var': 'error',
		},
	},

	// TypeScript files
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			import: importPlugin,
		},
		rules: {
			// TypeScript recommended rules
			...tseslint.configs.recommended.rules,

			// TypeScript specific
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{ prefer: 'type-imports' },
			],

			// Import rules
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling'],
						'index',
					],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			'import/no-duplicates': 'error',
		},
	},

	// React files
	{
		files: ['**/*.tsx'],
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'jsx-a11y': jsxA11yPlugin,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			// React recommended rules
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			...jsxA11yPlugin.configs.recommended.rules,

			// React specific
			'react/react-in-jsx-scope': 'off', // Not needed in React 17+
			'react/prop-types': 'off', // Using TypeScript
			'react/jsx-uses-react': 'off',
			'react/jsx-uses-vars': 'error',
			'react/jsx-key': 'error',
			'react/jsx-no-target-blank': 'error',
			'react/self-closing-comp': 'warn',

			// React Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// Accessibility
			'jsx-a11y/anchor-is-valid': 'warn',
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/no-autofocus': 'off',
		},
	},

	// Astro files
	...astroPlugin.configs.recommended,
	{
		files: ['**/*.astro'],
		rules: {
			// Astro-specific overrides if needed
		},
	},

	// JavaScript files
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
];

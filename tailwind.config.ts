import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import containerQueryPlugin from '@tailwindcss/container-queries'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			black: '#000',
			white: '#fff',
			current: 'currentColor',
			gray: {
				200: '#eee'
			}
		},
		extend: {
			transitionDuration: {
				250: '250ms'
			},
			borderColor: {
				DEFAULT: 'currentColor'
			},
			screens: {
				xs: '480px'
			},
			fontFamily: {
				sans: ['Agrandir', 'sans-serif']
			},
			fontSize: {
				// https://royalfig.github.io/fluid-typography-calculator/
				'xl': 'clamp(1.5rem, 1.41rem + 0.434vw, 1.75rem)',
				'4xl': 'clamp(2.75rem, 1.4021739130434783rem + 6.739130434782608vw, 6.625rem)'
			},
			backgroundImage: {},
			spacing: {
				lg: 'clamp(2.00rem, calc(1.91rem + 0.43vw), 2.25rem)',
				xl: 'clamp(2.00rem, calc(1.52rem + 2.39vw), 3.38rem)',
				'2xl': 'clamp(3.125rem, 2.4728260869565215rem + 3.260869565217391vw, 5rem)'
			},
			letterSpacing: {
			},
			lineHeight: {
			},
			dropShadow: {},
			animation: {
			},
			keyframes: {
				
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'in-out-quad': 'cubic-bezier(0.65, 0, 0.35, 1)',
				'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
				'out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)',
				'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
				'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)'
			}
		}
	},
	plugins: [
		containerQueryPlugin,
		plugin(({ addVariant }) => {
			addVariant('js', '[data-js]:root &')
			addVariant('prev-hover', ':hover + &')
			addVariant('no-js', ':root:not([data-js]) &')
			addVariant('loaded', [':root:not([data-js]) &', '&[data-loaded]'])
			addVariant('fonts-loaded', [':root:not([data-js]) &', '[data-fonts-loaded]:root &'])
			addVariant('entered', [
				'&[data-observe-entered]',
				'[data-observe-entered] &',
				':root:not([data-js]) &'
			])
			addVariant('entered-fonts-loaded', [
				'[data-fonts-loaded]:root &[data-observe-entered]',
				'[data-fonts-loaded]:root [data-observe-entered] &',
				':root:not([data-js]) &'
			])
			addVariant('entering', ['&[data-observe-entered]', '[data-observe-entering] &'])
		})
	]
} satisfies Config

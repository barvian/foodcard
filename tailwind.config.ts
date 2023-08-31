import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import containerQueryPlugin from '@tailwindcss/container-queries'
import { fluidCorePlugins, buildFluidExtract, defaultScreensInRems } from '@fluidstyle/tailwindcss-plugin'
const { '2xl': _, ...screens } = defaultScreensInRems

export default {
	content: {
		files: ['./src/**/*.{html,js,svelte,ts}'],
		extract: buildFluidExtract()
	},
	theme: {
		colors: {
			black: '#000',
			white: '#fff',
			current: 'currentColor',
			gray: {
				200: '#eee'
			}
		},
		screens: {
			...screens,
			xs: '30rem'
		},
		extend: {
			transitionDuration: {
				250: '250ms'
			},
			borderColor: {
				DEFAULT: 'currentColor'
			},
			fontFamily: {
				sans: ['Agrandir', 'sans-serif']
			},
			backgroundImage: {},
			letterSpacing: {},
			lineHeight: {},
			dropShadow: {},
			animation: {},
			keyframes: {},
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
		fluidCorePlugins,
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

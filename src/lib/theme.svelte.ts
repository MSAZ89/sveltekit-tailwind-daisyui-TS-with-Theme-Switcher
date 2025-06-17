// lib/theme.ts
import { browser } from '$app/environment';

export const THEMES = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'dim',
	'nord',
	'sunset',
	'caramellatte',
	'abyss',
	'silk'
] as const;

export type Theme = (typeof THEMES)[number];

function createThemeState() {
	let current = $state<Theme>('light');

	// Initialize from localStorage if available
	if (browser) {
		const stored = localStorage.getItem('theme') as Theme;
		current = stored && THEMES.includes(stored) ? stored : 'light';
		updateHtmlTheme(current);
	}

	return {
		get current() {
			return current;
		},

		set(newTheme: Theme) {
			current = newTheme;

			if (browser) {
				localStorage.setItem('theme', newTheme);
				updateHtmlTheme(newTheme);
			}
		}
	};
}

function updateHtmlTheme(theme: Theme) {
	if (browser && document.documentElement) {
		document.documentElement.setAttribute('data-theme', theme);
	}
}

export const theme = createThemeState();

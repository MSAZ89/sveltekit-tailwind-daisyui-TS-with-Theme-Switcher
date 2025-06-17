# SvelteKit 5 + DaisyUI Theme Switcher

A modern, flash-free theme switcher component for SvelteKit 5 applications using DaisyUI themes with persistent storage.

## Features

- ✅ **35 Built-in DaisyUI Themes** - All official DaisyUI themes supported
- ✅ **Flash-Free Loading** - No theme flash on page load/refresh
- ✅ **Persistent Storage** - Theme preference saved in localStorage
- ✅ **Modern Svelte 5** - Uses `$state` runes for global reactivity
- ✅ **TypeScript Support** - Full type safety
- ✅ **SSR Compatible** - Works with server-side rendering
- ✅ **Zero Dependencies** - Only uses SvelteKit and DaisyUI

## Tech Stack

- **SvelteKit** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS 4** - Utility-first CSS framework
- **DaisyUI** - Semantic component library for Tailwind

## Installation

1. **Clone Project or copy files** into your SvelteKit project

2. **Install dependencies** (if not already installed):

```bash
npm i
```

## File Structure

### `src/lib/theme.svelte.ts`

Global theme state using Svelte 5's `$state` rune. Handles theme persistence and HTML attribute updates.

### `src/lib/components/ThemeSwitcher.svelte`

Reusable theme switcher component with DaisyUI styling.

### `src/app.html`

Contains the critical theme initialization script that prevents flash-of-unstyled-content (FOUC).

### `src/routes/app.css`

Global CSS file where DaisyUI is imported and configured.

## Usage

### Basic Implementation

```svelte
<!-- +page.svelte -->
<script lang="ts">
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { theme } from '$lib/theme.svelte';
</script>

<div class="min-h-screen bg-base-100">
	<div class="container mx-auto p-8">
		<h1 class="text-4xl font-bold text-base-content mb-8">My App</h1>

		<div class="card bg-base-200 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Theme Switcher</h2>
				<p>Current theme: <span class="badge badge-primary">{theme.current}</span></p>
				<ThemeSwitcher class="mt-4" />
			</div>
		</div>
	</div>
</div>
```

### Advanced Usage

```svelte
<script lang="ts">
	import { theme } from '$lib/theme.svelte';

	// Programmatically change theme
	function setDarkMode() {
		theme.set('dark');
	}

	// React to theme changes
	$effect(() => {
		console.log('Theme changed to:', theme.current);
	});
</script>
```

## API Reference

### Theme State

```typescript
import { theme } from '$lib/theme.svelte';

// Get current theme
theme.current; // 'light' | 'dark' | 'cupcake' | ...

// Set new theme
theme.set('dark');
```

### ThemeSwitcher Component

```svelte
<ThemeSwitcher class="custom-classes" />
```

**Props:**

- `class` (optional): Additional CSS classes for styling

### Available Themes

All 35 official DaisyUI themes are supported:

`light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`, `cmyk`, `autumn`, `business`, `acid`, `lemonade`, `night`, `coffee`, `winter`, `dim`, `nord`, `sunset`, `caramellatte`, `abyss`, `silk`

## How It Works

1. **Initialization**: Theme is loaded from localStorage on app startup
2. **Flash Prevention**: Critical CSS script in `app.html` sets theme before page renders
3. **Persistence**: Theme changes are automatically saved to localStorage
4. **Reactivity**: Svelte 5's `$state` provides global reactivity across components
5. **HTML Integration**: Theme updates the `data-theme` attribute on `<html>` for DaisyUI

## Customization

### Adding Custom Themes

1. **Update CSS config**:

```css
@config {
	plugins: {
		daisyui: {
			themes:
				[ 'light',
				'dark',
				'your-custom-theme'];
		}
	}
}
```

2. **Update theme constants**:

```typescript
// In theme.svelte.ts
export const THEMES = [...existingThemes, 'your-custom-theme'] as const;
```

### Styling the Switcher

```svelte
<ThemeSwitcher class="w-48 max-w-none" />
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use in your projects.

---

**Built with ❤️ using SvelteKit 5 and DaisyUI**

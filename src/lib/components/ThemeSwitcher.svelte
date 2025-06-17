<!-- ThemeSwitcher.svelte -->
<script lang="ts">
	import { THEMES, theme, type Theme } from '$lib/theme.svelte';

	let { class: className = '' }: { class?: string } = $props();

	function handleThemeChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		const newTheme = target.value as Theme;
		theme.set(newTheme);
	}

	// Capitalize first letter for display
	function formatThemeName(themeName: string): string {
		return themeName.charAt(0).toUpperCase() + themeName.slice(1);
	}
</script>

<div class={`form-control w-full max-w-xs ${className}`}>
	<label class="label" for="theme-select">
		<span class="label-text">Choose Theme</span>
	</label>
	<select
		id="theme-select"
		class="select select-bordered w-full"
		value={theme.current}
		onchange={handleThemeChange}
	>
		{#each THEMES as themeName}
			<option value={themeName}>
				{formatThemeName(themeName)}
			</option>
		{/each}
	</select>
</div>

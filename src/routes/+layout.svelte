<script lang="ts">
	import '../app.css';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	let { children } = $props();
</script>

<ThemeSwitcher />
{@render children()}

<script lang="ts">
	import { getCachedLang, loadTranslations, setCachedLang } from '$lib';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	const defaultColor = 'white';
	const activatedColor = 'rgb(130, 124, 124)';

	let frenchBtnColor = $state(defaultColor);
	let englishBtnColor = $state(defaultColor);
	onMount(() => {
		const lang = getCachedLang();
		if (lang === 'fr') {
			frenchBtnColor = activatedColor;
			englishBtnColor = defaultColor;
		}

		if (lang === 'en') {
			englishBtnColor = activatedColor;
			frenchBtnColor = defaultColor;
		}
	});
	async function setFrench(): Promise<void> {
		await loadTranslations('fr', page.url.pathname);
		setCachedLang('fr');
		frenchBtnColor = activatedColor;
		englishBtnColor = defaultColor;
	}

	async function setEnglish(): Promise<void> {
		await loadTranslations('en', page.url.pathname);
		setCachedLang('en');
		englishBtnColor = activatedColor;
		frenchBtnColor = defaultColor;
	}
</script>

<div>
	<button id="french-btn" onclick={setFrench} style="background-color: {frenchBtnColor};">Fr</button
	><button onclick={setEnglish} id="english-btn" style="background-color: {englishBtnColor};"
		>En</button
	>
</div>

<style>
	div {
		position: fixed;
		top: 10px;
		left: 10px;
		opacity: 0.2;
	}

	div:hover {
		opacity: 1;
	}

	#french-btn {
		border: solid 1px;
		border-right: solid 0.5px;
	}

	#english-btn {
		border: solid 1px;
		border-left: solid 0.5px;
	}

	button {
		font-size: 1.3em;
		background-color: gainsboro;
	}

	@media (max-width: 750px) {
		button {
			font-size: 1em;
		}

		div {
			position: relative;
			top: 6px;
			left: 5px;
		}
	}
</style>

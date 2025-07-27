<script lang="ts">
	import Header from '../../components/Header.svelte';
	import { t } from '$lib/translations';
	import Comunica from './comunica.svelte';
	import Bakage from './bakage.svelte';
	import Freetube from './freetube.svelte';
	import Triage from './triage.svelte';
	import CodeAnalysisZ3 from './codeAnalysisZ3.svelte';
	import Epicurean from './epicurean.svelte';
	import Smt3 from './smt3.svelte';
	import CitationWallpaper from './citationWallpaper.svelte';
	import RemoteControlledCar from './remoteControlledCar.svelte';
	import DistanceSensor from './distanceSensor.svelte';
	import MangaScraper from './mangaScraper.svelte';
</script>

<svelte:head>
	<title>{$t('global.project')}</title>
</svelte:head>

<Header />

<div class="project-block">
	<h2>Open Source Projects</h2>
	<Comunica />
	<Bakage />
	<Freetube />

	<h2>Academic Projects (Université Laval)</h2>
	<Triage />
	<CodeAnalysisZ3 />
	<Epicurean />

	<h2>Personal Projects</h2>
	<Smt3 />
	<CitationWallpaper />
	<RemoteControlledCar />
	<DistanceSensor />
	<MangaScraper />
</div>

<style>
	.project-block {
		margin-top: 3vh;
		display: flex;
		flex-direction: column;
		align-self: center;
		align-content: center;
	}

	@media (min-width: 750px) {
		.project-block {
			margin-right: 10vw;
			margin-left: 10vw;
		}
	}

	h2 {
		text-align: center;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		align-self: center;
		justify-content: center;
		font-family: 'Courier New';
	}
</style>

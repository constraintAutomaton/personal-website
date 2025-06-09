<script>
	import { t } from '$lib/translations';
</script>

<div class="header">
	<div>
		<h1><a href="./">Constraint Automaton</a></h1>
	</div>
	<div>
		<a href="/">{$t('global.home')}</a>
		<a href="/resume.pdf" target="_blank">{$t('global.resume')}</a>
		<a href="/blog">{$t('global.blog')}</a>
		<a href="/publication">{$t('global.publication')}</a>
	</div>
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
	}

	@media (min-width: 360px) {
		h1 {
			font-size: 1.7em;
		}
	}
</style>

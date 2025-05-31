<script>
	import Header from '../components/Header.svelte';
</script>

<div class="content">
	<Header />
	<p class="summary">
		I'm a PhD student in computer science, currently researching decentralized querying. I'm also
		very interested in logic programming (mainly Prolog 🙂) and functional programming. You can find
		most of my work on <a href="https://github.com/constraintAutomaton">GitHub</a>. The source code
		of this website is
		<a href="https://github.com/constraintAutomaton/personal-website">available here</a>.
	</p>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 30vh;
		width: 60vw;
		margin-top: 10vh;
		border: solid 3px;
		border-radius: 25px;
	}
	.summary {
		margin-top: 3vh;
        padding-left: 2vw;
        padding-right: 2vw;
	}
	:global(body) {
		display: flex;
		justify-content: center;
        font-family: "Courier New";
	}
</style>

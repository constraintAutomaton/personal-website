<script>
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<script type="text/turtle">
		@prefix foaf: <http://xmlns.com/foaf/0.1/>.
        @prefix owl: <http://www.w3.org/2002/07/owl#>.

        <#me> a foaf:Person;
        foaf:givenName "Bryan-Elliott";
        foaf:familyName "Tam";
        foaf:account <https://github.com/constraintAutomaton>;
        foaf:account <https://orcid.org/0000-0003-3467-9755>;
        owl:sameAs <https://data.knows.idlab.ugent.be/person/bryanelliotttam/#me>.

        <https://github.com/constraintAutomaton> a foaf:OnlineAccount;
        foaf:accountName "constraintAutomaton";
        foaf:accountServiceHomepage <https://github.com/>.

        <https://orcid.org/0000-0003-3467-9755> a foaf:OnlineAccount;
        foaf:accountServiceHomepage <https://orcid.org/>;
        foaf:accountName "https://orcid.org/0000-0003-3467-9755".
	</script>
</svelte:head>

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

<script>
    import LangButton from "../components/LangButton.svelte";
	let { children } = $props();
</script>
<LangButton/>

{@render children()}
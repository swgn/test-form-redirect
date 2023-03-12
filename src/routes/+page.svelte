<script>
	import { enhance } from '$app/forms';
</script>

<h1>Welcome to SvelteKit</h1>

<form method="POST" use:enhance>
	<input type="text" name="search_terms" />
	<button type="submit">Search</button>
</form>

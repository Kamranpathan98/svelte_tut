<script>
	export let name;
	export let age;

	const number =  1234567890;
	let count = 0
	const textString = "The total count is";

	const htmlstring = "<b>This is bold text in html and we can bind it using @html</b>"

	function addNumber() {
		count += 1
	}
</script>

<main>
	<p>{@html htmlstring}</p>
	<h1>Hello {name} your age is {age} and the number is {number}!</h1>
	<button on:click={addNumber}>Add Number</button>
	<h3>{textString} : {count}</h3>
	<!-- This is conditional rendering -->
	{#if  count > 0}
	<h2>The count is greater than zero</h2>
	{:else}
	<h2>The count is zero and please hit the Add Number Button above</h2>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
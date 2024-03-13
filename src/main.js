import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Test Buddy', 
		age: 20
	}
});

export default app;
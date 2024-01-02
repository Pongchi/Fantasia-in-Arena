import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world' as string,
	}
});

export default app;
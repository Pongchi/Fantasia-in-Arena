<!-- App.svelte -->
<script>
	import { onMount } from 'svelte';
	import * as PIXI from 'pixi.js';
  
	onMount(() => {
	  const app = new PIXI.Application({ width: 800, height: 600 });
	  document.body.appendChild(app.view);
  
	  const circle = new PIXI.Graphics();
	  circle.beginFill(0x00ff00);
	  circle.drawCircle(400, 300, 50);
	  circle.endFill();
	  app.stage.addChild(circle);
	});
</script>
  
  <style>
	/* 필요한 스타일을 추가할 수 있습니다. */
  </style>
  
  <main>
	<div id="gameCanvas"></div>
  </main>
  
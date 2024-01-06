<script lang="ts">
	import { onMount } from 'svelte';
	import Phaser from 'phaser';
	import MainScene from './components/scene/MainScene.svelte';
	import FPSScene from './components/scene/FPSScene.svelte';
  
	onMount(() => {
		const config = {
			type: Phaser.AUTO,
			width: 1024,
			height: 768,
			scene: [MainScene, FPSScene],

			physics: {
				default: 'matter',
				matter: {
					gravity: {
						x: 0,
						y: 9.8
					}
				}
			}
		};
		const game = new Phaser.Game(config);
	});
  </script>
  
  <style>
	/* 필요한 스타일 추가 */
  </style>
  
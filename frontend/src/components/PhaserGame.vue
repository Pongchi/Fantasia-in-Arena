<script setup>
import { onMounted, onUnmounted } from 'vue'
import game from '@/game/config';

let gameInstance = null
const containerId = 'game-container'

onMounted(() => {
  gameInstance = game.launch(containerId);
  window.addEventListener('resize', resizeGame);
})

onUnmounted(() => {
  gameInstance.destroy(false);
  window.removeEventListener('resize', resizeGame);
})

function resizeGame() {
  gameInstance.scale.resize(window.innerWidth, window.innerHeight);
  gameInstance.renderer.resize(window.innerWidth, window.innerHeight);
}

</script>

<template>
  <div :id="containerId" />
</template>

<template>
  <div id="app">
    <PhaserGame />
  </div>
</template>

<script>
import PhaserGame from "@/components/PhaserGame";

export default {
  components: {
    PhaserGame,
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
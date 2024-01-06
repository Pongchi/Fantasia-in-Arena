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
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
<template>
  <div ref="gameContainer"></div>
</template>

<script>
import Phaser from 'phaser';

export default {
  data() {
    return {
      characterName: 'hello',
    };
  },
  mounted() {
    this.initializeGame();
  },
  methods: {
    initializeGame() {
      // Phaser 게임 초기화
      this.game = new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'gameContainer',
        width: window.innerWidth,
        height: window.innerHeight,
        scene: {
          preload: this.preload,
          create: this.create,
        },
      });
    },
    preload() {
      // 필요한 리소스 로드
      this.load.image('logo', 'assets/logo.png');
    },
    create() {
      // 캐릭터의 이름을 이용한 환영 메시지 표시
      this.add.text(10, 10, `Welcome, ${this.characterName}!`, {
        font: '24px Arial',
        fill: '#ffffff',
      });

      // 캐릭터 이미지 표시
      this.add.image(400, 300, 'logo');
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일링이 필요한 경우 작성 */
</style>

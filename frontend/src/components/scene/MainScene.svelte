<!-- MainScene.svelte -->
<script lang="ts">
  import Phaser from 'phaser';

  export class MainScene extends Phaser.Scene {
    constructor() {
      super({ key: 'MainScene' });
    }

    preload() {
      // 여기에서 필요한 리소스를 로드할 수 있습니다.
    }

    create() {
      // 화면 중앙에 사각형을 그립니다.
      const graphics = this.add.graphics();
      const centerX = this.cameras.main.width / 2;
      const centerY = this.cameras.main.height / 2;
      const rectWidth = 100;
      const rectHeight = 100;

      graphics.fillStyle(0x00ff00, 1); // 색상과 투명도 설정
      graphics.fillRect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight); // x, y, width, height
    }
  }
</script>

<style>
  /* 필요한 스타일 추가 */
</style>

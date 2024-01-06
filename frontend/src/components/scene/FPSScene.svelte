<script lang="ts">
    import Phaser from 'phaser';
  
    class FPSScene extends Phaser.Scene {
        private text: Phaser.GameObjects.Text|null = null

        constructor() {
            super({ key: 'fpsScene', active: true })
        }

        create(): void {
            this.text = this.add.text(10, 10, '');
        }

        update(): void {
            this.text?.setText(`FPS: ${this.game.loop.actualFps}`);
        }
    }
  </script>
  
  <style>
    /* 필요한 스타일 추가 */
  </style>
  
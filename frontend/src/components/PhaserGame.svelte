<script>
    import { onMount } from 'svelte';
    import Phaser from 'phaser';
  
    onMount(() => {
      // Phaser 게임을 초기화하는 코드
      const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
          preload: preload,
          create: create,
          update: update
        }
      };
  
      const game = new Phaser.Game(config);
  
      function preload() {
        // 로드할 리소스들을 여기에 추가
      }
  
      function create() {
        // 게임 시작 시 실행할 초기화 코드
      }
  
      function update() {
        // 게임 업데이트 루프
      }
    });
  </script>
  
  <style>
    /* 필요한 스타일을 추가할 수 있습니다. */
  </style>
  
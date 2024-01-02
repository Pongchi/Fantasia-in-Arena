<!-- Game.svelte -->
<script>
    import { onMount } from 'svelte';
    import { fabric } from 'fabric';
  
    onMount(() => {
      // canvas 초기화
      const canvas = new fabric.Canvas('gameCanvas');
  
      // 사각형 추가 예제
      const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: 'red',
        left: 50,
        top: 50,
      });
  
      canvas.add(rect);
  
      // 기타 게임 로직 등을 추가할 수 있습니다.
    });
  </script>
  
  <style>
    /* 필요한 스타일을 추가할 수 있습니다. */
  </style>
  
  <main>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
  </main>
  
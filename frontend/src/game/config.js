// config.js (or game.js)
import Phaser from 'phaser';
import MainScene from '@/game/MainScene';

export default {
  launch(containerId) {
    return new Phaser.Game({
      type: Phaser.AUTO,
      parent: containerId,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'matter',
        arcade: {
          gravity: {
            x: 0,
            y: 9.8,
          },
        },
      },
      scene: [MainScene],
    });
  }
};

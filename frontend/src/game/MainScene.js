import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('logo', './assets/game/logo.png');
  }
  
  create() {
    this.cameras.main.setBackgroundColor('#ff0000');
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'logo');
  }
}
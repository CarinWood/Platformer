import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    width: 500,
    height: 320,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    pixelArt: true
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 400 },
        debug: true,
        debugShowVeloctiy: true,
        debugShowBody: true,
        debugShowStaticBody: true,
    }
  },
};
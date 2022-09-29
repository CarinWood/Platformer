import Phaser from 'phaser';
import Hero from '../entities/Hero';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(data) {}

  preload() {
    this.load.tilemapTiledJSON('level-1', '../../assets/tilemaps/level-1.json')
    this.load.image('world-1-sheet', '../../assets/tilesets/word-1.png')
    this.load.spritesheet('hero-run-sheet', '../../assets/hero/run.png', {frameWidth: 32, frameHeight: 64})
  }

  create(data) {

    this.cursorKeys = this.input.keyboard.createCursorKeys()

     this.hero = new Hero(this, 250, 160) 

    

    this.anims.create({
      key: 'hero-running',
      frames: this.anims.generateFrameNumbers('hero-run-sheet'),
      frameRate: 10,
      repeat: -1,
    })

    
   

    this.addmap()
    this.hero.anims.play('hero-running');

  }




  addMap() {

    this.map = this.make.tilemap({ key: 'level-1' });
    const groundTiles = this.map.addTilesetImage('world-1', 'world-1-sheet');

    this.map.createStaticLayer('Ground', groundTiles);

  }

 
}

export default Game;
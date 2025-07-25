import { Boot } from './scenes/Boot';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
//
import { TravelScene } from './scenes/TravelScene';
import { GameScene } from './scenes/GameScene';
import { CombatScene } from './scenes/CombatScene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1080,
    height: 1920,
    parent: 'game-container',
    backgroundColor: 0x3a404d,
    scene: [
        Boot,
        Preloader,
        MainMenu,
        GameOver,
        TravelScene,
        GameScene,
        CombatScene
    ],
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.ENVELOP
    },
    plugins: {
    }
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;

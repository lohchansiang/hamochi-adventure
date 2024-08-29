import { Boot } from './scenes/Boot';
import { GameOver } from './scenes/GameOver';
import { Game as MainGame } from './scenes/Game';
import { MainMenu } from './scenes/MainMenu';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes/Preloader';
import { Battle } from './scenes/Battle';
import { TestGround } from './scenes/TestGround';
import { CardMaker } from './scenes/CardMaker';
//
import GrayScalePipelinePlugin from 'phaser3-rex-plugins/plugins/grayscalepipeline-plugin.js';

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
        MainGame,
        Battle,
        GameOver,
        TestGround,
        CardMaker
    ],
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.ENVELOP
    },
    plugins: {
        global: [{
            key: 'rexGrayScalePipeline',
            plugin: GrayScalePipelinePlugin,
            start: true
        },
        // ...
        ]
    }
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;

import { GameScene } from "@/adventure/scenes/GameScene";

export enum GameFlow{
    INIT,
    LOAD_END,
    ENTRY,
    READY,
}

// To control inputs
export enum GameState{
    NONE,
    PLAY,
    MENU, // Shop, 
    MOVIE,
    DIALOGUE
}

export default class GameSceneManager{
    scene: GameScene
    gameState: GameState
    //
    constructor(scene:GameScene){
        this.scene = scene
        this.gameState = GameState.NONE;
    }
    
    // set game state
    setGameState( gameState: GameState ){
        if( gameState == this.gameState ) return;

        /**
            NONE,
            PLAY,
            MENU, // Shop, 
            PAUSED,
            DIALOGUE,
         */
        switch (gameState) {
            case GameState.PLAY:
                this.gameState = gameState;
                break;
            case GameState.MENU:
                this.gameState = gameState;
                break;  
            case GameState.DIALOGUE:
                this.gameState = gameState;
                break; 
            case GameState.MOVIE:
                this.gameState = gameState;
                break;  
            default:
                break;
        }
    }

    // Functions
    // - Change state
    // - Check can input
    // - Goto map
    // - Player Enter Map
    // - Player Exit Map

}
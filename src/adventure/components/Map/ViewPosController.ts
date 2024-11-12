import { GameObjects, Scene, Tweens } from "phaser";
import GameLib from "@/lib/GameLib";
import { MapPosition, ViewPosition } from "./MapEnum";
import { MoveState } from "../Player/PlayerEnum";

export default class ViewPosController{
    static preload( scene: Scene ){
       //
    }

    scene: Scene
    world: GameObjects.Container
    //
    currentMoveState: MoveState
    waitTime: number
    targetWaitTime: number = 80 // Time waited to change camera position
    viewPosition: ViewPosition

    // Callback

    constructor(scene:Scene, world:GameObjects.Container){
        this.scene = scene
        this.world = world

        // Init position to middle
        this.moveViewPosition(ViewPosition.Q2);
    }

    update( moveState: MoveState,mapPos: MapPosition ){
        // If reach start, force to left side
        if( mapPos == MapPosition.START ){ 
            this.moveViewPosition(ViewPosition.Q3);
            return;
        };
        if( mapPos == MapPosition.END ){
            this.moveViewPosition(ViewPosition.Q1);
            return;
        }

        if( moveState == MoveState.IDLE ) return;

        // Player avatar move based on avatar facing, middle
        if( this.currentMoveState != moveState ){
            // Reset 
            this.currentMoveState = moveState;
            this.waitTime = 0;
            //
            this.moveViewPosition(ViewPosition.Q2);
        }else{
            if( this.waitTime < this.targetWaitTime ){
                this.waitTime += 1;
                if( this.waitTime == this.targetWaitTime ){
                    if( moveState == MoveState.LEFT ){
                        this.moveViewPosition(ViewPosition.Q3);
                    }else if( moveState == MoveState.RIGHT ){
                        this.moveViewPosition(ViewPosition.Q1);
                    }
                }
            }
        }
    }

    moveViewPosition( newViewPos: ViewPosition ){
        if( this.viewPosition == newViewPos ) return;

        let toMove: boolean = false;
        let newX: number = 0;
        if( newViewPos == ViewPosition.Q1 ){
            toMove = true;
            newX = GameLib.quaterX - 50;
        }else if( newViewPos == ViewPosition.Q2 ){
            toMove = true;
            newX = GameLib.midX;
        }else if( newViewPos == ViewPosition.Q3 ){
            toMove = true;
            newX = GameLib.quater3X + 50;
        }

        if( toMove ){
            this.viewPosition = newViewPos;
            this.scene.tweens.add({
                targets: [this.world],
                x:  newX,
                ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 1000,
            });
        }
    }
}
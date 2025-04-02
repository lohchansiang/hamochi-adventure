import { GameObjects, Scene, Tweens } from "phaser";
import GameLib from "@/lib/GameLib";
import { MapPosition, ViewPosition } from "./MapEnum";
import { InputMovement } from "../Player/PlayerEnum";

export default class ViewPosController{

    /**
     * Act like camera
     * - Move world position center point based on avatar direction and movement
     * - 3 View Positions
     *      - Q1 > Left
     *      - Q2 > Middle
     *      - Q3 > Right
     */
    
    static preload( scene: Scene ){
       //
    }

    private scene: Scene
    private world: GameObjects.Container
    //
    private waitTime: number
    private targetWaitTime: number = 50 // Time waited to change camera position
    private viewPosition: ViewPosition
    //
    private currentInputMovement: InputMovement
    // Callback

    constructor(scene:Scene, world:GameObjects.Container){
        this.scene = scene
        this.world = world

        // Init position to middle
        this.moveViewPosition(ViewPosition.Q2);
    }

    update( inputMovement: InputMovement,mapPos: MapPosition ){
        // If reach start, force to left side
        if( mapPos == MapPosition.START ){ 
            this.moveViewPosition(ViewPosition.Q3);
            return;
        };
        if( mapPos == MapPosition.END ){
            this.moveViewPosition(ViewPosition.Q1);
            return;
        }

        if( inputMovement == InputMovement.NONE ) return;

        // Player avatar move based on avatar facing, middle
        if( this.currentInputMovement != inputMovement ){
            // Reset 
            this.currentInputMovement = inputMovement;
            this.waitTime = 0;
            //
            this.moveViewPosition(ViewPosition.Q2);
        }else{
            if( this.waitTime < this.targetWaitTime ){
                this.waitTime += 1;
                if( this.waitTime == this.targetWaitTime ){
                    if( inputMovement == InputMovement.LEFT ){
                        this.moveViewPosition(ViewPosition.Q3);
                    }else if( inputMovement == InputMovement.RIGHT ){
                        this.moveViewPosition(ViewPosition.Q1);
                    }
                }
            }
        }
    }

    forceMoveViewPosition( mapPos: MapPosition ){
        if( mapPos == MapPosition.START ){ 
            this.moveViewPosition(ViewPosition.Q3);
            return;
        };
        if( mapPos == MapPosition.END ){
            this.moveViewPosition(ViewPosition.Q1);
            return;
        }

        this.moveViewPosition(ViewPosition.Q2);
    }

    private moveViewPosition( newViewPos: ViewPosition ){
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
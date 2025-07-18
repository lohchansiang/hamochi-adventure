import { EventBus } from '../EventBus';
import { Game, GameObjects, Scene, Tweens } from 'phaser';
import GameLib from '@/lib/GameLib';
import { CombatFlow } from '../components/Combat/CombatFlow';
import ModalLoader from '../modals/ModalLoader';

export class CombatScene extends Scene
{
    renderDebug: boolean = true
    //
    camera: Phaser.Cameras.Scene2D.Camera
    loader: ModalLoader
    //

    preload(){
        //
    }

    constructor ()
    {
        super('CombatScene');
    }

    create ( data:any )
    {
        console.log('start scene > CombatScene');
        // Add Ref 

        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xffffff);

        this.loader = new ModalLoader(this);
       
        EventBus.emit('current-scene-ready', this);
        this.runFlow(CombatFlow.INIT);
    }

    runFlow( flow: CombatFlow ){
        switch (flow) {
            case CombatFlow.INIT:
                // Delay call simulate loading
                this.time.delayedCall( 500, () => {
                    this.runFlow(CombatFlow.LOAD_END);
                }, [], this);

                break;

            case CombatFlow.LOAD_END:
                // Close Loading Modal
                this.loader.close(()=>{
                    this.runFlow( CombatFlow.READY );
                });    

                break;
            case CombatFlow.READY:
                
                break;
            default:
                break;
        }
    }

    clean(){
        console.log('CombatScene > clean');
    }
}

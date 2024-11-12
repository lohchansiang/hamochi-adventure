import { EventBus } from '../EventBus';
import { GameObjects, Scene } from 'phaser';
import GameLib from '@/lib/GameLib';

export class TravelScene extends Scene
{
    renderDebug: boolean = true
    //
    camera: Phaser.Cameras.Scene2D.Camera;

    constructor ()
    {
        super('TravelScene');
    }

    create ( data:any )
    {

        EventBus.emit('current-scene-ready', this);
    }

    
}

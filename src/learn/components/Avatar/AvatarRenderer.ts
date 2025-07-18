import { GameObjects, Scene, Tweens } from "phaser";
import { AvatarMask, AvatarState } from "./AvatarEnum";
import { CharacterData, CharacterRepo, MochiAvatarData } from "../../repos/CharacterRepo";
import AvatarMochiRenderer from "./AvatarMochiRenderer";

export default class AvatarRenderer{
    static preload( scene: Scene ){
        //
    }

    private emptyContainer: GameObjects.Container
    private type: 'none' | 'mochi' = 'none'
    private mochiRenderer: AvatarMochiRenderer

    constructor(scene:Scene, x: number, y: number ){
        this.emptyContainer = scene.add.container(x,y);
        this.mochiRenderer = new AvatarMochiRenderer(scene,x,y);
    }

    renderAvatar( characterKey:string ){

        console.log( characterKey );
        // Get Avatar Data
        let charData: CharacterData | undefined = CharacterRepo.getCharacterData( characterKey );
        
        console.log( charData );

        if( charData && charData.avatarType == 'mochi' ){
            console.log( 'Render Mochi' );

            this.mochiRenderer.renderAvatar(characterKey);
            this.type = 'mochi';
        }
    }

    setAvatarState( newState: AvatarState ){
        if( this.type == 'mochi' ){
            this.mochiRenderer.setAvatarState( newState );
        }
    }

    setDirection( direction: number ){
        if( this.type == 'mochi' ){
            this.mochiRenderer.setDirection( direction );
        }
    }

    setEmojiMask( maskKey: AvatarMask ){
        if( this.type == 'mochi' ){
            this.mochiRenderer.setDirection( maskKey );
        }
    }

    setPositionX( x:number ){
        if( this.type == 'mochi' ){
            this.mochiRenderer.setPositionX( x );
        }
    }

    getContainer(): GameObjects.Container {
        if( this.type == 'mochi' ){
            return this.mochiRenderer.getContainer();
        }

        return this.emptyContainer;
    }
}
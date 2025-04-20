import { Scene } from "phaser";
import { MoveDirection, MoveState } from "../Map/MapEnum";
import AvatarRenderer from "../Avatar/AvatarRenderer";
import { AvatarMask, AvatarState } from "../Avatar/AvatarEnum";

export class AvatarMoveData{
    direction: MoveDirection
    state: MoveState
    x: number
}

export default class PlayerController{
    /**
     * PlayerController
     * - Control player avatar sprite, emoji, animation when move / action
     */
    static preload( scene: Scene ){
       //
    }

    private scene: Scene
    private avatar: AvatarRenderer

    constructor(scene:Scene, ){
        this.scene = scene
    }

    linkAvatar(avatar: AvatarRenderer){
        this.avatar = avatar
    }

    update( avatarData: AvatarMoveData ){
        if( this.avatar && avatarData ){
            if( avatarData.direction == MoveDirection.BACKWARD ){
                this.avatar.setDirection(-1);
            }else{
                this.avatar.setDirection(1);
            }

            if( avatarData.state == MoveState.MOVING ){
                this.avatar.setAvatarState(AvatarState.WALK);
            }else if( avatarData.state == MoveState.BLOCKED ){
                this.avatar.setEmojiMask( AvatarMask.NERVOUS );
            }else{
                this.avatar.setAvatarState(AvatarState.IDLE);
                this.avatar.setEmojiMask( AvatarMask.NONE );
            }

            this.avatar.setPositionX(avatarData.x); 
        }
    }

    enterFromSide( avatarData: AvatarMoveData, entryType: string, callback?: Function ){
        if( this.avatar &&  avatarData ){
            let distance:number = 1000;
            if( entryType == 'right' ){
                this.avatar.setPositionX(avatarData.x + distance); 
                this.avatar.setDirection(-1);
            }else{
                this.avatar.setPositionX(avatarData.x - distance); 
                this.avatar.setDirection(1);
            }

            this.avatar.setAvatarState(AvatarState.WALK);

            this.scene.tweens.add({
                targets: this.avatar.getContainer(),
                x: avatarData.x,
                duration: 1000, 
                ease: 'Linear',
                repeat: 0, 
                yoyo: false,
                onComplete: ()=>{
                    this.avatar.setAvatarState(AvatarState.IDLE);

                    if( callback ){
                        callback();
                    }
                } 
            });
        }
    }
}
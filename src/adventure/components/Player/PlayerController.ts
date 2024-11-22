import { Scene } from "phaser";
import PlayerAvatar from "./PlayerAvatar";
import { AvatarMask, AvatarState } from "./PlayerEnum";
import { MoveDirection, MoveState } from "../Map/MapEnum";

export class AvatarMoveData{
    direction: MoveDirection
    state: MoveState
    x: number
}

export default class PlayerController{
    static preload( scene: Scene ){
       //
    }

    scene: Scene
    avatar: PlayerAvatar

    constructor(scene:Scene, avatar: PlayerAvatar){
        this.scene = scene
        this.avatar = avatar
    }

    update( avatarData: AvatarMoveData ){
        if( avatarData ){
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

            this.avatar.x = avatarData.x;
        }
    }
}
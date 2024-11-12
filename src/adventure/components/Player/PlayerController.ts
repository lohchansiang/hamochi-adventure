import { Scene } from "phaser";
import PlayerAvatar from "./PlayerAvatar";
import { AvatarMask, AvatarState, MoveState } from "./PlayerEnum";
import { MoveMode } from "../Map/MapEnum";

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

    update( moveMode:MoveMode, deltaX:number ){
        if( deltaX > 0 ){
            this.avatar.setDirection(1);
            this.avatar.setAvatarState(AvatarState.WALK);
        }else if( deltaX < 0 ){
            this.avatar.setDirection(-1);
            this.avatar.setAvatarState(AvatarState.WALK);
        }else{
            this.avatar.setAvatarState(AvatarState.IDLE);
            this.avatar.setEmojiMask( AvatarMask.NONE );
        }
       
        if( moveMode == MoveMode.BLOCKED ){
            this.avatar.setEmojiMask( AvatarMask.NERVOUS );
        }

        if( moveMode == MoveMode.AVATAR ){
            this.avatar.x += deltaX;
        }else if( moveMode == MoveMode.MAP ){
            this.avatar.x = 0;
        }
    }
}
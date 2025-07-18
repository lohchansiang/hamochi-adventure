import { GameObjects, Scene } from "phaser"
import { AvatarMask, AvatarState } from "../components/Avatar/AvatarEnum"

export interface IAvatar{
    /**
     * AvatarRendererInterface 
     * Use to render Mochi
     * Use to render Unique
     */

    renderAvatar( characterKey:string ): void
    setAvatarState( newState: AvatarState ): void
    setDirection( direction: number ): void
    setPositionX( x:number ): void
    getContainer(): GameObjects.Container
    setEmojiMask( maskKey: AvatarMask ): void
}
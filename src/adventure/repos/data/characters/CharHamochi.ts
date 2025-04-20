import { AvatarTextureRepo } from "../../AvatarTextureRepo";
import { CharacterData, PortraitEmojiKey } from "../../CharacterRepo";

export const CharHamochi: CharacterData =  {
    key: "CharHamochi", // Player? 
    name: "Hamochi",
    avatar: {
        bodyBase: "hamochiBody",
        bodyStroke: "hamochiBodyStroke",
        bodyColor: 0xFFD48A,
        eye: "defaultEye",
        eyeBlink: "defaultEyeBlink",
        hair: [
            "defaultHair"
        ],
        mouth: "defaultMouth",
        cheek: "defaultCheek",
        shadow: "defaultShadow",
    },
    portraits: [
        // {
        //     key: PortraitEmojiKey.DEFAULT,
        //     textureKey: "123",
        //     texturePath: "132"
        // }
    ],
    defaultDialogKey: null
}
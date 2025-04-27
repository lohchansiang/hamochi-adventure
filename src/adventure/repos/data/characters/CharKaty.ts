import { CharacterData, PortraitEmojiKey } from "../../CharacterRepo";

export const CharKaty: CharacterData =  {
    key: "CharKaty",
    name: "Katy",
    avatar: {
        bodyBase: "catBody",
        bodyStroke: "catBodyStroke",
        bodyColor: 0xFFFF00,
        eye: "defaultEye",
        eyeBlink: "defaultEyeBlink",
        hair: [
            "defaultHair"
        ],
        mouth: "catMouth",
        cheek: "defaultCheek",
        shadow: "defaultShadow",
        hairColor: 0xFFFF00
    },
    portraits: [
        // {
        //     key: PortraitEmojiKey.DEFAULT,
        //     textureKey: "123",
        //     texturePath: "132"
        // }
    ],
    defaultDialogKey: "DialogKatyHi"
}
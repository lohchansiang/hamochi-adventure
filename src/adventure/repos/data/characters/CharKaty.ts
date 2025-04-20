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
            "empty"
        ],
        mouth: "catMouth",
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
    defaultDialogKey: "DialogKatyHi"
}
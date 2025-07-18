import { CharacterData } from "../../CharacterRepo";

export const CharBlackBear: CharacterData =  {
    key: "CharBlackBear",
    name: "Black Bear",
    avatarType: 'mochi',
    avatarMochi: {
        bodyBase: "bearBody",
        bodyStroke: "bearBodyStroke",
        bodyColor: 0x808080,
        eye: "defaultEye",
        eyeBlink: "defaultEyeBlink",
        hair: [
            "empty"
        ],
        mouth: "bearMouth",
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
    defaultDialogKey: ""
}
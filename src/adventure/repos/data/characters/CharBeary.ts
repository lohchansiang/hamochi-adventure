import { CharacterData, PortraitEmojiKey } from "../../CharacterRepo";

export const CharBeary: CharacterData =  {
    key: "CharBeary",
    name: "Beary",
    avatar: {
        bodyBase: "bearBody",
        bodyStroke: "bearBodyStroke",
        bodyColor: 0x964B00,
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
    defaultDialogKey: "DialogBearyHi"
}
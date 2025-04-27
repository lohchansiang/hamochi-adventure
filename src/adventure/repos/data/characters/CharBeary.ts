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
            "defaultHair"
        ],
        mouth: "bearMouth",
        cheek: "defaultCheek",
        shadow: "defaultShadow",
        hairColor: 0x964B00
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
import { CharacterData, PortraitEmojiKey } from "../../CharacterRepo";

export const CharRuby: CharacterData =  {
    key: "CharRuby",
    name: "Ruby",
    avatar: {
        bodyBase: "rabbitBody",
        bodyStroke: "rabbitBodyStroke",
        bodyColor: 0xFFFFFF,
        eye: "defaultEye",
        eyeBlink: "defaultEyeBlink",
        hair: [
            "empty"
        ],
        mouth: "rabbitMouth",
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
    defaultDialogKey: "DialogRubyHi"
}
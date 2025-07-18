import { CharacterData, PortraitEmojiKey } from "../../CharacterRepo";

export const CharOwl: CharacterData =  {
    key: "CharOwl",
    name: "Owl Teacher",
    avatarType: 'mochi',
    avatarMochi: {
        bodyBase: "owlBody",
        bodyStroke: "owlBodyStroke",
        bodyColor: 0xFFC0CB,
        eye: "defaultEye",
        eyeBlink: "defaultEyeBlink",
        hair: [
            "empty"
        ],
        mouth: "owlMouth",
        cheek: "empty",
        shadow: "defaultShadow",
    },
    portraits: [
        // {
        //     key: PortraitEmojiKey.DEFAULT,
        //     textureKey: "123",
        //     texturePath: "132"
        // }
    ],
    defaultDialogKey: "DialogWelcome"
}
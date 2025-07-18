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
    defaultDialogKey: "DialogWelcome"
}
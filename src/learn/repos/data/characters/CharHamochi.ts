import { CharacterData, PortraitEmojiKey } from "../../CharacterRepo";

export const CharHamochi: CharacterData =  {
    key: "CharHamochi", // Player? 
    name: "Hamochi",
    avatarType: 'mochi',
    avatarMochi: {
        bodyBase: "hamochiBody",
        bodyStroke: "hamochiBodyStroke",
        bodyColor: 0xFFD48A,
        eye: "defaultEye",
        eyeBlink: "defaultEyeBlink",
        hair: [
            "hamochiHair"
        ],
        mouth: "defaultMouth",
        cheek: "defaultCheek",
        shadow: "defaultShadow",
    },
    defaultDialogKey: null
}
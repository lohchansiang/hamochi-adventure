import { GameObjects, Scene } from "phaser"

export class Question{
    key: string
    question: Translatable
    choices: Array<QChoice> 
}

export class QChoice{
    value: number
    text: Translatable
    isAnswer: boolean
}

export class Translatable{
    en: string
    zh: string
    ms: string
}

export default class QuestionGenerator{
    constructor ()
    {
        
    }
}
export class DialogData{
    key: string
    audioAssetPath: string
    lines: Array<DialogLine>
}

export class DialogLine{
    sequenceKey: string
    message: string
    nextSequenceKey?: string // If none, run next
    delayCallbacks?: Array<{ delay: number; key: string }>// Array of timed callbacks> To call back on delay after play
    lineEndKey?: string
    isPaused?:boolean = false
}
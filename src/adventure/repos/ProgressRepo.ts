
export class Quest{
    type: string
    key: string
    name: string
}

export class QuestLine{
    key: string
    quests: Array<Quest>
}


export class ProgressRepo
{
    quests: Array<QuestLine> = [
        {
            key: 'main',
            quests: [
                {   
                    type: 'story',
                    key: 'main001',
                    name: 'Main 001'
                },
            ]
        }
    ]

    /** 
     * Progress
     * 1. Play story
     * 
     * 2. Trigger point
    */

    constructor ()
    {
        
    }
}
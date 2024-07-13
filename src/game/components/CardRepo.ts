import AdventureCard from "./AdventureCard"

export class ACard{
    key: string
    title: string
    description: string
    spriteKey: string
    actionText: string
    requireToComplete: boolean
    onPress: Function
    onResult: Function 
}

export const ACardList: ACard[] = [
    {
        key: 'chest',
        title: 'Chest',
        description: '+ 50 Coins.',
        spriteKey: 'cardChest',
        actionText: 'Get',
        requireToComplete: false,
        onPress: (card: AdventureCard )=>{
            card.openModalResult()
        },
        onResult: (card: AdventureCard )=>{
            if( card != undefined && card.gameManager != undefined ){
                card.gameManager.addCoin(50)
                card.isCompleted = true
                card.clean()
            }
        }
    },
    {
        key: 'battle',
        title: 'Mr. Worm',
        description: 'Defeat Mr. Worm',
        spriteKey: 'cardWorm',
        actionText: 'Fight',
        requireToComplete: true,
        onPress: (card: AdventureCard )=>{
            card.openModalResult()
        },
        onResult: (card: AdventureCard)=>{
            // Redirect to Battle Scene
            if( card != undefined && card.gameManager != undefined ){
                card.gameManager.setBattleSlotNumber(card.slotNumber)
            }
        }
    },
    {
        key: 'heal',
        title: 'Potion',
        description: 'Heal 1 health',
        spriteKey: 'cardHeal',
        actionText: 'Use',
        requireToComplete: false,
        onPress: (card: AdventureCard )=>{
            card.openModalResult()
        },
        onResult: (card: AdventureCard)=>{
            if( card != undefined && card.gameManager != undefined ){
                card.gameManager.heal()
                card.isCompleted = true
                card.clean()
            }
        }
    }
]

export class CardRepo
{
    static findCard( key:string ): ACard | undefined {
        const card:ACard | undefined = ACardList.find((c)=> {return c.key == key})
        return card
    }
}
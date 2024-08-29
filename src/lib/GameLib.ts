
class GameLib
{
    static screenWidth: integer = 1080;
    static screenHeight: integer = 1920;

    static colorPanelBg: number = 0x9D7956;
    static colorPanelBgDark: number = 0x563F35;
    static colorPanelButtonLight: number = 0xF2E6BF
    static colorPanelButtonTextLight: number = 0xE1AF3D
    static colorPanelButtonDark: number = 0xCAB88D
    static colorPanelButtonTextDark: number = 0x9E7856
    static colorSuccess: number = 0x4BAE4F
    static colorFailed: number = 0xE04F5F
    static colorYellow: number = 0xFFF600

    static textDefaultStyle: Object = {
        fontSize: '40px',
        fontFamily: 'Arial',
        color: '#000000',
    }

    constructor ()
    {
        //
    }
    
    static midX = GameLib.screenWidth/2; 
    static midY = GameLib.screenHeight/2; 
    static quaterX = GameLib.screenWidth*0.25; 
    static quaterY = GameLib.screenHeight*0.25; 
    static quater3X = GameLib.screenWidth*0.75; 
    static quater3Y = GameLib.screenHeight*0.75; 

    static shuffle(array: Array<any>):Array<any> {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    static getRandomNumbers(min:number, max:number, count:number, exclude:number[] = []) {
        // Create an array with all numbers in the range
        let numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    
        // Remove the excluded numbers from the array
        numbers = numbers.filter(num => !exclude.includes(num));
    
        // Check if we have enough numbers left to satisfy the count
        if (count > numbers.length) {
            throw new Error("Not enough numbers available to generate the requested count.");
        }
    
        // Shuffle the array using the Fisher-Yates algorithm
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
    
        // Return the first 'count' elements of the shuffled array
        return numbers.slice(0, count);
    }
}

export default GameLib


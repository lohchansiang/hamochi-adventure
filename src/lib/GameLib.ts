
class GameLib
{
    static screenWidth: integer = 1080;
    static screenHeight: integer = 1920;

    constructor ()
    {
        //
    }
    
    static centerX(){
       return GameLib.screenWidth/2; 
    }

    static centerY(){
        return GameLib.screenHeight/2; 
    }

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
}

export default GameLib


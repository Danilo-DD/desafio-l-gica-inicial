let victory = 100
let defeat= 25
let level=" "

function recieved(victory, defeat){
    let sum=victory+defeat
    return sum
}
totalPlays=recieved(100, 25)
console.log("You played "+totalPlays+" games in your entire career.")
console.log("Like this, you have "+victory+" victories and "+defeat+" defeats.")


function dataValue(victory,defeat){
    let sub= victory-defeat
    return sub
}
rankeadasValue=dataValue(100,25)
console.log("Your rankead balance is "+ rankeadasValue+".")


switch(true){
    case rankeadasValue<10:
        level="iron"
            break
            
    case rankeadasValue>=11 && rankeadasValue<=20:
        level="copper"
            break
         
    case rankeadasValue>=21 && rankeadasValue<=50:
        level="silver"
            break
        
    case rankeadasValue>=51 && rankeadasValue<=80:
        level="gold"
            break
            
    case rankeadasValue>=81 && rankeadasValue<=90:
        level="diamond"
            break
            
    case rankeadasValue>=91 && rankeadasValue<=100:
        level="legendary"
            break
            
    case rankeadasValue>=101:
        level="imortal"
}

console.log("The Hero has a balance of "+rankeadasValue+" victories,and is in the level "+level+"!")


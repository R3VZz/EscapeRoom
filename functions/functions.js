import { getDirection, getName, retry, selectEnding, selectAction } from './inquiry.js'
import { Player, Enemy, Boss, Room } from './classes.js'
import { derek, kevin, pnorris, cyrill, angela, death } from './ascii.js'

export async function user() {
    const player = new Player(await getName())
    return player
}

export async function main() {
    const player = await user(); // Wait for user() to complete and get the player object
    console.log(`Hello ${player.name}! \n`)
    kidney(player); // Call room1 with the player object
}

// export const potion = (character) => {
//     character.health += 20
//     console.log(`${character.name} drinks a potion (now has ${character.health} health!)`)
//     return character
// }

// kidney room1
export const kidney = async(player) => {
    const room = new Room("Kidney")
    const kidneyStone = new Enemy("Kevin the kidney stone")
    console.log('You find yourself in the kidneys, a bustling microcosm',
    'teeming with activity and intricate structures. A huge boulder like',
    'monster rolls towards you. "I will crush you!" it bellows - it looks ',
    'like you\'re going to have to fight it.')

    await combat(player, kidneyStone)
    if (player.isAlive === false) {
        await restartGame()
    }

    let direction = await getDirection();
    if (direction === "left") {
        // go to lungs
        console.log("lung \n")
        lungs(player)
    }
    else if (direction === 'right') {
        // go to liver
        console.log("liver \n")
        liver(player)
    }
}

// lungs room2
export const lungs = async(player) => {
    const room = new Room("Liver")
    const pneumonia = new Enemy("Pnorris Pneumonia")
    
    await combat(player, pneumonia)
    if (player.isAlive === false) {
        await restartGame()
    }

    let direction = await getDirection();
    if (direction === 'left') {
        // go to liver
        console.log("liver \n")
        liver(player)

    }
    else if (direction === 'right') {
        // go back to kidneys
        console.log("kidneys \n")
        kidney(player)
    }
}

// liver room3
export const liver = async (player) => {
    const room = new Room("Lungs")
    const cirrhosis = new Enemy("Cyrill Cirrhoris")
    
    await combat(player, cirrhosis)
    if (player.isAlive === false) {
        await restartGame()
    }

    let direction = await getDirection();
    if (direction === 'left') {
        // go back to kidneys
        console.log("kidneys \n")
        kidney(player)
    }
    else if (direction === 'right') {
        // go to heart
        console.log("heart \n")
        heart(player)
    }
}

// heart room4
export const heart = async (player) => {
    const room = new Room("Heart")
    const angina = new Enemy("Angela Angina")
    
    await combat(player, angina)
    if (player.isAlive === false) {
        await restartGame()
    }

    let direction = await getDirection();
    if (direction === 'left') {
        // go to brain
        console.log("brain \n")
        brain(player)
        
    }
    else if (direction === 'right') {
        // go to lungs
        console.log("lung \n")
        lungs(player)
    }
}

// brain room5
export const brain = async (player) => {
    const room = new Room("Brain")
    const dementia = new Boss("Derek the Dementor")
    
    await combat(player, dementia)
    if (player.isAlive === false) {
        await restartGame()
    }

    let response = await selectEnding();
    if (response === "Good end") {
        // bad text
        console.log("good end \n") // update later (low priority)
    }
    else if (response === "Bad end") {
        // good text
        console.log("bad end \n") // update later (low priority)
    }

    restartGame();
}

export async function combat(player, enemy) {
    //loop until a death
    while (player.isAlive && enemy.isAlive) {
        let action = await selectAction()

        if (action === 'Attack') {
            //player attacks enemy
            enemy.health -= player.attack
            console.log(`${player.name} attacks ${enemy.name} causing ${player.attack} damage. ${player.name} now has ${player.health} health.`)
        } else if (action === 'Heal') {
            //player heals themselves
            player.health += 50
            console.log(`${player.name} heals and now has ${player.health} health.`)
        }

        //check if enemy is defeated
        if (enemy.health <= 0) {
            enemy.isAlive = false
            console.log(`${enemy.name} has been defeated!`)
            break 
        } else {
            console.log(`${enemy.name} has ${enemy.health} health remaining.`)
        }

        //enemy's attack
        if (enemy.isAlive) {
            player.health -= enemy.attack
            console.log(`${enemy.name} attacks ${player.name} causing ${enemy.attack} damage.`)

            //check if player is dead
            if (player.health <= 0) {
                console.log(`${player.name} has been killed! You failed to exit the body.`)
                return player.isAlive = false
            } else {
                console.log(`${player.name} has ${player.health} health remaining.`)
            }
        }
    }
}

export const restartGame = async () => {
    let restart = await retry()
    if (restart === "Yes") {
        console.log("restarting \n")
        main()
    }
    else if (restart === "No") {
        console.log("Thanks for playing \n")
        process.exit()
    }
}

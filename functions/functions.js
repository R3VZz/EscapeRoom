import { getDirection, getName, retry, selectEnding, selectAction } from './inquiry.js'
import { Player, Enemy, Boss, Room } from './classes.js'
import { derek, kevin, pnorris, cyrill, angela, death } from './ascii.js'
import { intro } from './intro.js'


export const startGame = async () => {
    const player = await user();            
    await intro(player);
    kidney(player);
}

export async function user() {
    const player = new Player(await getName())
    return player
}  

// kidney room1
export const kidney = async(player) => {
    const room = new Room("Kidney")
    const kidneyStone = new Enemy("Kevin the kidney stone")
    console.log(`
    
    \x1b[34m*You are now in the kidneys*\x1b[0m
    You awake to find yourself inside your patient's the kidneys, a bustling
    microcosm teeming with activity and intricate structures. A huge boulder like monster
    rolls towards you. "I will crush you!" it bellows - it looks
    like you're going to have to fight it...`)

    kevin()

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
    const room = new Room("Lungs")
    const pneumonia = new Enemy("Pnorris Pneumonia")
    
    console.log(`
    
    \x1b[34m*You are now in the lungs*\x1b[0m
    You wander down your chosen path, exhausted from you battle with Kevin.
    The tunnel opens up into a huge chasm, expanding and contracting around you. You realise
    that you're inside the lungs just as gloopy fluid starts rising up to your waist... 
    panic sets in. The gunk then starts to talk: 
    "These lungs are mine! How dare you intrude on Pnorris' territory!". 
    "Strange name, Pnorris" you retort.
    "The P is silent, it's pronounced Norris. Now you die!".
    Looks like you're going to have to fight again...`)

    pnorris()
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
    const room = new Room("Liver")
    const cirrhosis = new Enemy("Cyrill Cirrhoris")
    console.log(`
    
    \x1b[34m*You are now in the liver*\x1b[0m
    Travelling on as you scrape the goo of Pnorris off your face,
    you now find yourself within the vast expanse of the human liver; an endless
    spongy reddish-brown landscape stretching out in all directions, with rivers
    of blood flowing through it within a complex network of vessels. As you try to
    step over one of these vessels it winds around your leg, holding you in place.
    "Yum!" exclaims a voice from nowhere.
    You decide to kill this thing, whatever it is...`)
    cyrill()

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
    console.log(`
    
    \x1b[34m*You are now in the heart*\x1b[0m
    You step through an enourmous organic door, opening and closing
     periodically, entering a smooth walled, pulsating chamber.
     "This must be the heart" you say to yourself.
     "Yes, that's right!" booms a voice, seemingly eminating from the walls of the
     heart. "And you don't belong here!". With each word uttered, the walls around
     you quake and vibrate, knocking you off your feet. You know the drill by now,
     time to fight...`)
     angela()

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
    console.log(`
    \x1b[34m*You are now in the brain*\x1b[0m
    After squeezing through a narrow tube for what seems like hours, you
    pull yourself up into a vast, bustling metropolis of neurons and synapses, like
    a network of millions of busy motorways, sparks of light traveling along each at
    a startling rate. A tiny squat thing approaches you, with a goofy smile on it's face.
    "Oooh, brains! Prepare to be scrambled!"`)
    derek()

    await combat(player, dementia)
    if (player.isAlive === false) {
        await restartGame()
    }
    let response = await selectEnding();
    if (response === "Tickle brain") {
        // bad text
        console.log(`
        You reach out and give the brain meats a little tickle.
        Everything starts to shudder, it looks like you've instigated a sneeze in your host.
        You are violently ejected from the body through their nose...
        
        YOU ARE VICTORIOUS! You are back in the real world, where you belong. Good work!
        You're still tiny though, but that's a story for another day!
        **ESCAPE THE HUMAN BODY 2 is currently in development, due 2028**
        `)
    }
    else if (response === "Poke brain") {
        // good text
        console.log(
        `You fervently reach out and prod the brain meats with your index
        finger. You feel weighless for a moment, as your host falls to the ground dead.
        You are trapped for eternity inside their rotting skull cavity.
        
        YOU HAVE LOST THE GAME`)
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
            console.log(`\x1b[32m${player.name} attacks ${enemy.name} causing ${player.attack} damage. ${player.name} now has ${player.health} health.\x1b[0m \n`)
        } else if (action === 'Heal') {
            //player heals themselves
            player.health += 50
            console.log(`\x1b[32m${player.name} heals and now has ${player.health} health.\x1b[0m \n`)
        }

        //check if enemy is defeated
        if (enemy.health <= 0) {
            enemy.isAlive = false
            console.log(`\x1b[35m${enemy.name} has been defeated!\x1b[0m \n`)
            break 
        } else {
            console.log(`\x1b[35m${enemy.name} has ${enemy.health} health remaining.\x1b[0m`)
        }

        //enemy's attack
        if (enemy.isAlive) {
            player.health -= enemy.attack
            console.log(`\x1b[35m${enemy.name} attacks ${player.name} causing ${enemy.attack} damage.\x1b[0m \n`)

            //check if player is dead
            if (player.health <= 0) {
                death();
                console.log(`\x1b[31m${player.name} has been killed! You failed to exit the body.\x1b[0m \n`)
                return player.isAlive = false
            } else {
                console.log(`\x1b[32m${player.name} has ${player.health} health remaining.\x1b[0m \n`)
            }
        }
    }
}

export const restartGame = async () => {
    let restart = await retry()
    if (restart === "Yes") {
        console.log("restarting \n")
        startGame()
    }
    else if (restart === "No") {
        console.log("Thanks for playing \n")
        process.exit()
    }
}

export class Player {
    constructor(name) {
        this.name = name
        this.health = 1000
        this.attack = 20
        this.isAlive = true
    }
}

export class Enemy {
    constructor(name) {
        this.name = name
        this.health = 50
        this.attack = 10
        this.isAlive = true
    }
}
// const kidneyStone = new Enemy("Kevin the kidney stone")
// const pneumonia = new Enemy("Pnorris Pneumonia")
// const cirrhosis = new Enemy("Cyrill Cirrhoris")
// const angina = new Enemy("Angela Angina")


export class Boss extends Enemy {
    constructor(name, health = 150, attack = 15) {
        super(name + "")
        this.health = health
        this.attack = attack
        this.rage = false
    }
}
// const dementia = new Boss("Derek the Dementor")

// create room class

export class Room {
    constructor(roomname) {
        this.roomname = roomname

    }
}   


const room1 = new Room ("Kidney")
const room2 = new Room ("Lungs")
const room3 = new Room ("Liver")
const room4 = new Room ("Heart")
const room5 = new Room ("Brain")

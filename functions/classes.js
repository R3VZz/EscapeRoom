export class Player {
    constructor(name) {
        this.name = name
        this.health = 100
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

export class Boss extends Enemy {
    constructor(name, health = 150, attack = 15) {
        super(name + "")
        this.health = health
        this.attack = attack
        this.rage = false
    }
}

export class Room {
    constructor(roomname) {
        this.roomname = roomname

    }
}   

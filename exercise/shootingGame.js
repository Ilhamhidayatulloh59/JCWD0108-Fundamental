class Player {
    health = 100
    power = 10

    constructor(name) {
        this.name = name
    }

    showStatus() {
        console.log(`Player ${this.name} (Health => ${this.health}, Power => ${this.power})`)
    }

    hit(power) {
        this.health -= power
        console.log(`Player ${this.name} has been damaged by ${power} points`)
        console.log(`Player ${this.name} has ${this.health} remaining health`)
    }

    useItem(item) {
        if (item.health) {
            this.health += item.health
            console.log(`Player ${this.name} received ${item.health} health points`)
        }

        if (item.power) {
            this.power += item.power
            console.log(`Player ${this.name} received ${item.power} power points`)
        }
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem() {
        let item = {}
        let rand = Math.floor(Math.random() * 10) // 0 ~ 9

        if (rand == 0) {
            item.health = 10
        } else if (rand == 1) {
            item.power = 10
        }

        return item // { health: 10 } atau { power: 10 } atau { }
    }

    start() {
        console.log("==== START GAME ====")
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log(`=== Player ${this.player1.name} turn ===`)
            this.player1.showStatus()
            this.player1.useItem(this.getRandomItem())
            this.player2.hit(this.player1.power)
            this.player2.showStatus()
            if (this.player2.health <= 0) {
                break
            }

            console.log(`=== Player ${this.player2.name} turn ===`)
            this.player2.showStatus()
            this.player2.useItem(this.getRandomItem())
            this.player1.hit(this.player2.power)
            this.player1.showStatus()
            if (this.player1.health <= 0) {
                break
            }
        }
        if (this.player1.health <= 0) {
            console.log(`The winner is player ${this.player2.name}`)
        } else {
            console.log(`The winner is player ${this.player1.name}`)
        }
    }
}

const player1 = new Player("Ahmad")
const player2 = new Player("Fathir")

const shootingGame1 = new ShootingGame(player1, player2)
shootingGame1.start()
class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500,
        }
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        money = Number(money)
        let neededParticipant = this.listOfParticipants.find(o => o.name == name)

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.')
        } else if (neededParticipant) {
            return `The ${name} is already registered at the camp.`
        } else if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.'
        } else {
            this.listOfParticipants.push({
                name,
                condition,
                power: 100,
                wins: 0,
            })

            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name) {

        let neededParticipant = this.listOfParticipants.find(o => o.name == name)

        if (neededParticipant) {
            let index = this.listOfParticipants.indexOf(neededParticipant)
            this.listOfParticipants.splice(index, 1)
            return `The ${name} removed successfully.`
        } else {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
    }


    timeToPlay(typeOfGame, participant1Name, participant2Name) {
        if (typeOfGame == 'WaterBalloonFights') {
            const participant1 = this.listOfParticipants.find((participant) => participant.name == participant1Name);
            const participant2 = this.listOfParticipants.find((participant) => participant.name == participant2Name);
 
            if (participant1 == undefined || participant2 == undefined) {
                throw new Error(`Invalid entered name/s.`);
            }
 
            if (participant1.condition != participant2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
 
            if (participant1.power > participant2.power) {
                participant1.wins += 1;
                return `The ${participant1.name} is winner in the game ${typeOfGame}.`;
            } else if (participant2.power > participant1.power) {
                participant2.wins += 1;
                return `The ${participant2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        }
 
        if (typeOfGame == 'Battleship') {
            const participant = this.listOfParticipants.find((participant) => participant.name == participant1Name);
            if (participant == undefined) {
                throw new Error(`Invalid entered name/s.`);
            }
 
            participant.power += 20
            return `The ${participant.name} successfully completed the game ${typeOfGame}.`;
        }
 
    }

    toString(){
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`

        this.listOfParticipants.sort((a, b) => b.wins - a.wins)

        for (const participant of this.listOfParticipants) {
            let lastParticipant = this.listOfParticipants[this.listOfParticipants.length - 1]
            if (participant == lastParticipant){
                result += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}` 
            }else{
            result += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`}
        }

        return result
    }

}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "collegian", 500));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

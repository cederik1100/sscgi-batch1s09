console.log(`              %c Pokemon Battle Simulator`, "color:rgb(255, 255, 255); font-size: 24px; font-weight: bold; text-align: center;");
console.log(".....................................................................")
class Pokemon {

    constructor(name, type, level, hp, maxHP, attackPoints, defensePoints) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.hp = hp;
        this.maxHP = maxHP
        this.attackPoints = attackPoints
        this.defensePoints = defensePoints
    }

    calculateDamage(basePower) {
        return Math.floor((this.level * basePower) / (50 + this.defensePoints));
    }

    receiveDamage(damage) {
        this.hp -= damage;
        console.log(`%c🎯 ${this.name} receives ${damage} damage! HP left: ${this.hp}/${this.maxHP}`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        if (this.hp <= 0) {
            console.log(`%c☠ ${this.name} has fainted!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");

        }
        const healAmount = this.randomHeal();
        if (healAmount == 20) {
            if (this.hp >= 1) {
                const PokemonHeal = this.hp + healAmount;
                console.log(`%c🆙➕ ${this.name} heals ${PokemonHeal}/${this.maxHP} HP!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(0, 255, 0); padding: 8px;");
            }
        }
    }
    randomHeal() {
        return Math.random() > 0.25 ? 0 : 20;
    }
    randomCritical() {
        let crit = Math.random() * (1 - 1 + 1) + 1;
        return Math.random() > 1 ? 0 : crit;
    }
}

class ElectricPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`%c⚔⚡ ${this.name} uses Thunder on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class FirePokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`%c⚔🔥 ${this.name} uses Flamethrower on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class WaterPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`%c⚔🌊 ${this.name} uses Hydro Pump on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class GrassPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`%c⚔🍃 ${this.name} uses Leaf Blade on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class RockPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`%c⚔ 🥊 ${this.name} uses Rock Slide on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemons = [];
    }

    addPokemon(pokemon) {
        if (this.pokemons.length < 5) {
            this.pokemons.push(pokemon);
            console.log(`%c⭐ ${pokemon.name} has joined ${this.name}'s team!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(0, 0, 255); padding: 8px;");
        } else {
            console.log(`%c⚠ ${this.name}'s team is full!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(0, 0, 255); padding: 8px;");
        }
    }
}


// tournament

class Tournament {
    constructor(...trainers) {
        this.trainers = trainers;
    }
    
    
    startTournament() {

        const trainerLimit = prompt("Enter the number of trainers for the tournament:");
        const pokemonLimit = prompt("Enter the number of pokemons for each trainer:");

        if (trainerLimit > 5) {
            console.log(`%c⚠ The maximum number of Trainers is five.`, "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 255, 0); padding: 8px; border-radius: 5px; background-color: rgb(255, 255, 0);");
        }
        else if (trainerLimit < 3) {
            console.log(`%c⚠ the minimum number of Trainers is three.`, "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 255, 0); padding: 8px; border-radius: 5px; background-color: rgb(255, 255, 0);");
        }
        else {
            if (pokemonLimit > 5) {
                console.log(`%c⚠ The maximum number of Pokemons is five.`, "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 255, 0); padding: 8px; border-radius: 5px; background-color: rgb(255, 255, 0);");
            }
            else {

                const trainerList = this.trainers.splice(0, trainerLimit);  
                // const pokemonList = this.pokemons.splice(0, pokemonLimit); 
                console.log(this.trainers.pokemons.name);
                console.log(trainerList);
                // console.log(pokemonList);

                // console.log(`%c Tournament has started with ${trainerLimit} Trainers and ${pokemonLimit} Pokemon per Trainer.`, "color:rgb(255, 255, 255); font-size: 15px; font-weight: bold; text-align: center; border: 1px dashed rgb(0, 0, 255); padding: 8px;");
                // const trainerNames = this.trainers.splice(0, trainerLimit);
                // console.log(trainerNames.map(trainer => trainer[0]));
                // const firstTrainer = trainerNames[0];
                // console.log(firstTrainer.pokemons.name);

                // for (let i = 0 ; i < trainerList.length ; i++){
                //     for (let j = 0 ; j < pokemonList.length ;j++){
                //         trainerList[i].addPokemon(pokemonList[j]);
                //     }
                // }





              
            }
        }
    }
}




// trainers
const ash = new Trainer("Ash");
const misty = new Trainer("Misty");
const brock = new Trainer("Brock");
const red = new Trainer("Red");
const gary = new Trainer("Gary");

console.log(`                       %c Trainers and Pokemons`, "color:rgb(255, 255, 255); font-size: 15px; font-weight: bold; text-align: center; border: 1px dashed rgb(0, 0, 255); padding: 8px;");

// pokemon for Ash
ash.addPokemon(new ElectricPokemon("Pikachu", "Electric", 50, 115, 115, 9, 8));
ash.addPokemon(new FirePokemon("Charizard", "Fire", 50, 120, 120, 10, 9));
ash.addPokemon(new RockPokemon("Onix", "Rock", 50, 110, 110, 11, 12));
ash.addPokemon(new WaterPokemon("Squirtle", "Water", 50, 110, 110, 10, 9));
ash.addPokemon(new GrassPokemon("Bulbasaur", "Grass", 50, 90, 90, 10, 8));


// pokemon for Misty
misty.addPokemon(new WaterPokemon("Starmie", "Water", 50, 110, 110, 9, 8));
misty.addPokemon(new GrassPokemon("Bulbasaur", "Grass", 50, 90, 90, 10, 8));
misty.addPokemon(new ElectricPokemon("Jolteon", "Electric", 50, 120, 120, 9, 8));
misty.addPokemon(new FirePokemon("Flareon", "Fire", 50, 130, 130, 9, 9));
misty.addPokemon(new WaterPokemon("Vaporeon", "Water", 50, 120, 120, 9, 8));


// pokemon for Brock
brock.addPokemon(new RockPokemon("Geodude", "Rock", 50, 120, 120, 11, 12));
brock.addPokemon(new RockPokemon("Onix", "Rock", 50, 140, 140, 11, 13));
brock.addPokemon(new WaterPokemon("Squirtle", "Water", 50, 110, 110, 10, 9));
brock.addPokemon(new FirePokemon("Charmander", "Fire", 50, 110, 110, 8, 7));
brock.addPokemon(new GrassPokemon("Chikorita", "Grass", 50, 100, 100, 9, 8));


// pokemon for red
red.addPokemon(new FirePokemon("Fennekin", "Fire", 50, 110, 110, 10, 8));
red.addPokemon(new GrassPokemon("Chespin", "Grass", 50, 100, 100, 9, 8));
red.addPokemon(new ElectricPokemon("Emolga", "Electric", 50, 120, 120, 9, 8));
red.addPokemon(new WaterPokemon("Squirtle", "Water", 50, 110, 110, 10, 9));
red.addPokemon(new RockPokemon("Tyranitar", "Rock", 50, 150, 150, 11, 12));


//pokemon for gary
gary.addPokemon(new FirePokemon("Arcanine", "Fire", 50, 130, 130, 10, 9));
gary.addPokemon(new GrassPokemon("Leafeon", "Grass", 50, 110, 110, 10, 8));
gary.addPokemon(new ElectricPokemon("Jolteon", "Electric", 50, 120, 120, 9, 8));
gary.addPokemon(new WaterPokemon("Blastoise", "Water", 50, 150, 150, 10, 10));
gary.addPokemon(new RockPokemon("Aerodactyl", "Rock", 50, 140, 140, 11, 11));



const tournament = new Tournament(ash, misty, brock, red, gary,);
tournament.startTournament();



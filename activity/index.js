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
    //(level*Attack)/(50+Defense)
    calculateDamage(basePower) {
        return Math.floor((this.level * basePower) / (50 + this.defensePoints));
    }

    receiveDamage(damage) {
        this.hp -= damage;
        console.log(`%c🎯 ${this.name} receives ${damage} damage! HP left: ${this.hp}/${this.maxHP}`,
            "color:rgb(255, 255, 255); font-size: 13px; font-weight: bold; border: 3px outset rgb(255, 0, 0); border-radius: 5px; background-color: rgb(110, 0, 0); padding: 8px;");
        if (this.hp <= 0) {
            console.log(`%c☠ ${this.name} has fainted!`,
                "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(214, 214, 214); border-radius: 5px; background-color: rgb(128, 128, 128); padding: 8px;");
        }

        const healAmount = this.randomHeal();
        if (healAmount == 20) {
            if (this.hp >= 1) {
                const PokemonHeal = this.hp + healAmount;
                console.log(`%c🆙➕ ${this.name} heals ${PokemonHeal}/${this.maxHP} HP!`,
                    "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(116, 255, 88); border-radius: 5px; background-color: rgb(21, 255, 0); padding: 8px;");
            }
        }
    }
    //random heal 25% chance
    randomHeal() {
        return Math.random() > 0.25 ? 0 : 20;
    }
    //random critical 25% chance
    randomCritical() {
        let crit = Math.random() * (1 - 1 + 1) + 1;
        return Math.random() > 1 ? 0 : crit;
    }
}

class ElectricPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`

%c⚔💥 ${this.name} uses Tackle on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(214, 214, 214); border-radius: 5px; background-color: rgb(128, 128, 128); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`

%c⚔⚡ ${this.name} uses Thunder on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(246, 255, 124); border-radius: 5px; background-color: rgb(240, 255, 26); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class FirePokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`

%c⚔💥 ${this.name} uses Tackle on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(214, 214, 214); border-radius: 5px; background-color: rgb(128, 128, 128); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`

%c⚔🔥 ${this.name} uses Flamethrower on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(255, 128, 128); border-radius: 5px; background-color: rgb(255, 25, 25); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class WaterPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`

%c⚔💥 ${this.name} uses Tackle on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(214, 214, 214); border-radius: 5px; background-color: rgb(128, 128, 128); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`

%c⚔🌊 ${this.name} uses Hydro Pump on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(135, 133, 255); border-radius: 5px; background-color: rgb(28, 51, 255); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class GrassPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`

%c⚔💥 ${this.name} uses Tackle on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(214, 214, 214); border-radius: 5px; background-color: rgb(128, 128, 128); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`

%c⚔🍃 ${this.name} uses Leaf Blade on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(149, 255, 128); border-radius: 5px; background-color: rgb(70, 255, 24); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class RockPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`

%c⚔💥 ${this.name} uses Tackle on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(214, 214, 214); border-radius: 5px; background-color: rgb(128, 128, 128); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`

%c⚔ 🥊 ${this.name} uses Rock Slide on ${target.name}!`,
            "color:rgb(0, 0, 0); font-size: 13px; font-weight: bold; border: 3px outset rgb(141, 141, 141); border-radius: 5px; background-color: rgb(102, 102, 102); padding: 8px;");
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


class Tournament {
    constructor() {
        this.trainers = [];
        this.topTrainers = [];
    }

    startTournament() {
        let trainerLimit = prompt("Enter the number of trainers for the tournament (minimum 3, maximum 5):");
        let pokemonLimit = prompt("Enter the number of pokemons for each trainer (max 5):");

        // Validate trainer limit
        if (trainerLimit < 3 || trainerLimit > 5) {
            console.log(`%c⚠ The number of trainers must be between 3 and 5!`, "color:rgb(0, 0, 0); font-family: lucida console; font-size: 15px; font-weight: bold; text-align: center; border: 5px outset rgb(255, 247, 130); border-radius: 10px; background-color: rgb(255, 251, 0); padding: 8px;");
            // Validate pokemon limit
            if (pokemonLimit > 5) {
                console.log(`%c⚠ The maximum number of pokemons is 5!`, "color:rgb(0, 0, 0); font-family: lucida console; font-size: 15px; font-weight: bold; text-align: center; border: 5px outset rgb(255, 247, 130); border-radius: 10px; background-color: rgb(255, 251, 0); padding: 8px;");

            }

        }

        else {

            console.log(`%c Tournament has started with ${trainerLimit} Trainers and ${pokemonLimit} Pokemon per Trainer.`, "color:rgb(0, 0, 0); font-family: lucida console; font-size: 15px; font-weight: bold; text-align: center; border: 5px outset rgb(206, 206, 206); border-radius: 5px; background-color: rgb(100, 116, 255); padding: 8px;");

            // trainers and pokemons
            const predefinedTrainers = [
                {
                    name: "Ash", pokemon: [new ElectricPokemon("Pikachu", "Electric", 50, 115, 115, 9, 8),
                    new FirePokemon("Charizard", "Fire", 50, 120, 120, 10, 9),
                    new RockPokemon("Onix", "Rock", 50, 110, 110, 11, 12),
                    new WaterPokemon("Squirtle", "Water", 50, 110, 110, 10, 9),
                    new GrassPokemon("Bulbasaur", "Grass", 50, 90, 90, 10, 8)]
                },
                {
                    name: "Misty", pokemon: [new WaterPokemon("Starmie", "Water", 50, 110, 110, 9, 8),
                    new GrassPokemon("Bulbasaur", "Grass", 50, 90, 90, 10, 8),
                    new ElectricPokemon("Jolteon", "Electric", 50, 120, 120, 9, 8),
                    new FirePokemon("Flareon", "Fire", 50, 130, 130, 9, 9),
                    new WaterPokemon("Vaporeon", "Water", 50, 120, 120, 9, 8)]
                },
                {
                    name: "Brock", pokemon: [new RockPokemon("Geodude", "Rock", 50, 120, 120, 11, 12),
                    new RockPokemon("Onix", "Rock", 50, 140, 140, 11, 13),
                    new WaterPokemon("Squirtle", "Water", 50, 110, 110, 10, 9),
                    new FirePokemon("Charmander", "Fire", 50, 110, 110, 8, 7),
                    new GrassPokemon("Chikorita", "Grass", 50, 100, 100, 9, 8)]
                },
                {
                    name: "Red", pokemon: [new FirePokemon("Fennekin", "Fire", 50, 110, 110, 10, 8),
                    new GrassPokemon("Chespin", "Grass", 50, 100, 100, 9, 8),
                    new ElectricPokemon("Emolga", "Electric", 50, 120, 120, 9, 8),
                    new WaterPokemon("Squirtle", "Water", 50, 110, 110, 10, 9),
                    new RockPokemon("Tyranitar", "Rock", 50, 150, 150, 11, 12)]
                },
                {
                    name: "Gary", pokemon: [new FirePokemon("Arcanine", "Fire", 50, 130, 130, 10, 9),
                    new GrassPokemon("Leafeon", "Grass", 50, 110, 110, 10, 8),
                    new ElectricPokemon("Jolteon", "Electric", 50, 120, 120, 9, 8),
                    new WaterPokemon("Blastoise", "Water", 50, 150, 150, 10, 10),
                    new RockPokemon("Aerodactyl", "Rock", 50, 140, 140, 11, 11)]
                }
            ];

            this.trainers = predefinedTrainers.slice(0, trainerLimit);
            this.trainers = this.trainers.map(trainer => {
                trainer.pokemon = trainer.pokemon.slice(0, pokemonLimit);
                return trainer;
            }
            )

            // Start battles between trainers
            let results = [];
            for (let i = 0; i < this.trainers.length; i += 2) {
                if (i + 1 < this.trainers.length) {
                    const winner = this.startBattle(this.trainers[i], this.trainers[i + 1]);
                    results.push(winner);
                    console.log(`
                

%cWinner of the match: ${winner.name}⭐🎉`,
                        "color:rgb(0, 0, 0); font-family: lucida console; font-size: 13px; font-weight: bold; border: 5px outset rgb(255, 125, 227); border-radius: 5px; background-color: rgb(255, 51, 221); padding: 8px;");
                } else {
                    // If there's an odd number of trainers, the last trainer automatically qualifies
                    results.push(this.trainers[i]);

                }
            }

            // Show the top 3 trainers
            this.topTrainers = results.slice(0, 3);
            console.log(`


%cThe top 3 trainers are:`,
                "color:rgb(0, 0, 0); font-family: lucida console; font-size: 13px; font-weight: bold; border: 5px outset rgb(235, 255, 125); border-radius: 5px; background-color: rgb(255, 235, 51); padding: 8px;");

            this.topTrainers.forEach((trainer, index) => {
                console.log(`%c${index + 1}. ${trainer.name} ⭐`, "color:rgb(0, 0, 0); font-family: lucida console; font-size: 13px; font-weight: bold; border: 5px outset rgb(235, 255, 125); border-radius: 5px; background-color: rgb(255, 235, 51); padding: 8px;");
            });

            const roundRobin = this.roundRobin(this.topTrainers);
            console.log(`%c⭐⭐⭐the winner of the Tournament is ${roundRobin.name} and ${roundRobin.pokemon.map(pokemon => pokemon.name).join(", ")}!⭐⭐⭐`,
            "color:rgb(0, 0, 0); font-family: lucida console; font-size: 13px; font-weight: bold; border: 5px outset rgb(235, 255, 125); border-radius: 5px; background-color: rgb(255, 235, 51); padding: 8px;");

      
        }
    }


    startBattle(trainer1, trainer2) {
        console.log(`
%c⚔ Battle begins between ${trainer1.name} and ${trainer2.name}! ⚔`,
            "color:rgb(0, 0, 0); font-family: lucida console; font-size: 15px; font-weight: bold; text-align: center; border: 5px outset rgb(206, 206, 206); border-radius: 5px; background-color: rgb(100, 116, 255); padding: 8px;");
        let t1Index = 0;
        let t2Index = 0;

        // Battle until one trainer's Pokémon are all defeated
        while (t1Index < trainer1.pokemon.length && t2Index < trainer2.pokemon.length) {
            let t1Pokemon = trainer1.pokemon[t1Index];
            let t2Pokemon = trainer2.pokemon[t2Index];

            console.log(`
%c⭐ Round starts with ${t1Pokemon.name} vs ${t2Pokemon.name}!`,
                "color:rgb(0, 0, 0); font-family: lucida console; font-size: 13px; font-weight: bold; border: 3px outset rgb(255, 125, 227); border-radius: 5px; background-color: rgb(255, 51, 221); padding: 8px;");

            // Pokemon battle
            while (t1Pokemon.hp > 0 && t2Pokemon.hp > 0) {
                Math.random() < 0.5 ? t1Pokemon.attack(t2Pokemon) : t1Pokemon.specialAttack(t2Pokemon);
                if (t2Pokemon.hp > 0) {
                    t2Pokemon.attack(t1Pokemon);
                }
            }

            // Check if any Pokémon fainted and switch to the next Pokémon
            if (t1Pokemon.hp <= 0) {
                t1Index++;
            }

            if (t2Pokemon.hp <= 0) {
                t2Index++;
            }
        }

        // Determine the winner of the battle
        if (t1Index < trainer1.pokemon.length) {
            return trainer1;
        } else {
            return trainer2;
        }
    }


    roundRobin(topTrainers) {
       
        let trainer1 = topTrainers[0];
        let trainer2 = topTrainers[1];

        console.log(`
%c⚔ Battle begins between ${trainer1.name} and ${trainer2.name}! ⚔`,
"color:rgb(0, 0, 0); font-family: lucida console; font-size: 15px; font-weight: bold; text-align: center; border: 5px outset rgb(206, 206, 206); border-radius: 5px; background-color: rgb(100, 116, 255); padding: 8px;");
        let t1Index = 0;
        let t2Index = 0;

        // Battle until one trainer's Pokémon are all defeated
        while (t1Index < trainer1.pokemon.length && t2Index < trainer2.pokemon.length) {
            let t1Pokemon = trainer1.pokemon[t1Index];
            let t2Pokemon = trainer2.pokemon[t2Index];

            this.trainers.forEach(trainer => {
                trainer.pokemon.forEach(pokemon => {
                    let pokemonHP = (pokemon.maxHP - pokemon.hp) + pokemon.hp;
                    pokemon.hp = pokemonHP;
                });
            });

            console.log(`
%c⭐ Round starts with ${t1Pokemon.name} vs ${t2Pokemon.name}!`,
"color:rgb(0, 0, 0); font-family: lucida console; font-size: 13px; font-weight: bold; border: 3px outset rgb(255, 125, 227); border-radius: 5px; background-color: rgb(255, 51, 221); padding: 8px;");

            // Pokemon battle
            while (t1Pokemon.hp > 0 && t2Pokemon.hp > 0) {
                Math.random() < 0.5 ? t1Pokemon.attack(t2Pokemon) : t1Pokemon.specialAttack(t2Pokemon);
                if (t2Pokemon.hp > 0) {
                    t2Pokemon.attack(t1Pokemon);
                }
            }

            // Check if any Pokémon fainted and switch to the next Pokémon
            if (t1Pokemon.hp <= 0) {
                t1Index++;
            }

            if (t2Pokemon.hp <= 0) {
                t2Index++;
            }
        }

        // Determine the winner of the battle
        if (t1Index < trainer1.pokemon.length) {
            return trainer1;
        } else {
            return trainer2;
        }

    }

}

// Start the tournament
const tournament = new Tournament();
tournament.startTournament();


// warrior = 'ninja'
'use strict'
const warrior = {
    name: 'herry',
    agility: 90,
    weapon: 'sword',
    type: 'Samurai'
}
const screamWarrior = () => {
    let warrior_2 = 'Samurai';
    warrior_3 = 'Viking';
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior_2)
        }
    }
}
const newWarrior = screamWarrior();

newWarrior.shootWarrior();
screamWarrior();
console.log(warrior_3)

// console.log(warrior, warrior_2)
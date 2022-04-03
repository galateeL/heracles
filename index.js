// First Labour : Heracles vs Nemean Lion
// use your Figher class here

import Fighter from "./src/Fighter.js";
//const Fighter = require('./src/Fighter.js');

const heracles = new Fighter (" 🧔 Heracles", 20, 6);
const nemean = new Fighter (" 🦁 Nemean Lion", 11, 13); 

let roundNumber = 1;

while(heracles.life > 0 && nemean.life > 0) {
    console.log(`🕛 Round # ${roundNumber}`);
    
    heracles.fight(nemean);
    console.log(`${heracles.name} 🗡️ ${nemean.name} 💙 ${nemean.name} : ${nemean.life}`);
    
    nemean.fight(heracles);
    console.log(`${nemean.name} 🗡️ ${heracles.name} 💙 ${heracles.name} : ${heracles.life}`);


    roundNumber ++ ;

}

console.log("");

if (heracles.life > 0) {
    console.log(`💀 ${nemean.name} is dead`);
    console.log(`🏆 ${heracles.name} wins (💙 ${heracles.life})`);
}else{
    console.log(`💀 ${heracles.name} is dead`);
    console.log(`🏆 ${nemean.name} wins (💙 ${nemean.life})`);
}



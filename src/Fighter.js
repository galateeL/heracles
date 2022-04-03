/* Fighter class definition */

const MAX_LIFE = 100;
class Fighter {
    constructor (name, strength, dexterity, life) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;  
    }

    fight(defender) {
        let attackPoints = this.getRandomInt(this.strength);
        
        let damage = attackPoints - defender.dexterity;
        if (damage < 0) damage = 0;

        defender.life = defender.life - damage;
        if (defender.life < 0) defender.life = 0;
    }

    getRandomInt(max) {
        return 1 + (Math.floor(Math.random() * max));
    }

}


//module.exports = Fighter; 
export default Fighter;

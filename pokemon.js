class Pokemon{
    //Creates pokemon
    constructor(name, attack, defense, health, type){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.baseHeath = health;
        this.type = type;
    }

    //Subtracts damage from health
    takeDamage(damage){
        this.health-=damage;
        if (this.health < 0){
            this.health = 0;
        }
    }

    //Attacks opponent and sets damge to 1 if defense>attack
    attackOpponent(opponent){
        let damage = this.attack - opponent.defense;
        if (damage <= 0){
            damage = 1;
        }
        opponent.takeDamage(damage);
    }

    //Returns the pokemon's name, type and health as a string.
    display(){
        let pokemonStatus = `${this.name.toUpperCase()} (${this.type.toUpperCase()}) ${this.health}/${this.baseHeath}`;
        return pokemonStatus;
    }
}






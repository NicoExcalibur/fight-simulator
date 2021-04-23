

class Character {
    constructor(nickname, characClass, health, attack) {
        this.nickname = nickname;
        this.characClass = characClass;
        this.health = health;
        this.attack = attack;
        this.level = 1;
    }

    get info() {
        return this.nickname + '(' + this.characClass + ") a " + this.health + " points de vie et est au niveau " + this.level + ".";
    }

    levelUp() {
        this.level++;
    }

    checkHealth() {
        if (this.health <= 0) {
            this.health == 0;
            console.log(this.nickname + ' a perdu !');
        }
    }
} 

class Wizard extends Character {

    constructor(nickname) {
        super(nickname, "magicien", 170, 90);
    }

    attackOtherCharacter(character) {
        character.health -= this.attack;

    }

    specialAttack(character) {
        character.health -= this.attack * 5;
    }
    
} 
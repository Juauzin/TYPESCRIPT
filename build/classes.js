"use strict";
// classes
/*modifiers pode ser usado em classes
private
public
protected
*/
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack witch ${this.stregth} points`);
    }
}
// SUBCLASSES
class Magia extends Character {
    constructor(name, stregth, skill, PontosMagia, ice) {
        super(name, stregth, skill);
        this.PontosMagia = PontosMagia;
        this.ice = ice;
    }
}
const p1 = new Character("Goku", 10, 98);
const p2 = new Magia("Mago", 11, 95, 45, 100);
p1.attack();

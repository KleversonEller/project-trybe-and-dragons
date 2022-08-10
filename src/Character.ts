import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get dexterity() { return this._dexterity; }
  get energy() {
    const { type_: type, amount } = this._energy;
    return { type_: type, amount }; 
  }

  receiveDamage(value: number) {
    const damage = value - this._defense;
    if (damage > 0) { this._lifePoints -= damage; }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
    return this.lifePoints;
  }

  attack(value: Fighter | SimpleFighter) {
    value.receiveDamage(this.strength);
  }

  levelUp() {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(value: Fighter | SimpleFighter) {
    if (this.energy.amount === 10 && this._dexterity >= 50) {
      this._strength *= 2;
      this._maxLifePoints /= 2;
      this._dexterity /= 2;
    } else {
      throw new Error(`Você deve possuir
    Amount = 10
    Dexterity >= 50

    No momento seu atributos são:
    Amount = ${this._energy.amount}
    Dexterity = ${this._dexterity}`);
    }
    value.receiveDamage(this.strength);
  }
}
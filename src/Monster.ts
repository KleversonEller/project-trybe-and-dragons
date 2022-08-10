import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }

  attack(value: SimpleFighter) {
    value.receiveDamage(this.strength);
  }

  receiveDamage(value: number) {
    if (value > 0) { this._lifePoints -= value; }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
    return this.lifePoints;
  }
}
import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }
  static createdRacesInstances() { return Dwarf._instances; }
}
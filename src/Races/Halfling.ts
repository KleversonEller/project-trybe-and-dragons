import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  get maxLifePoints() { return this._maxLifePoints; }
  static createdRacesInstances() { return Halfling._instances; }
}
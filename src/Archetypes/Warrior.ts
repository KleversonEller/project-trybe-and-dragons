import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._instances += 1;
    this._energyType = 'stamina';
  }

  get energyType() { return this._energyType; }
  static createdArchetypeInstances() { return Warrior._instances; }
}
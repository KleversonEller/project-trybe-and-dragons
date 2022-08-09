import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._instances += 1;
    this._energyType = 'stamina';
  }

  get energyType() { return this._energyType; }
  static createdArchetypeInstances() { return Ranger._instances; }
}
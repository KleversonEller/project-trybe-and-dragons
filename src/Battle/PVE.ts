import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private player1: Fighter;
  private monsters: Fighter[] | SimpleFighter[];

  constructor(player1: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(player1);
    this.player1 = player1;
    this.monsters = monsters;
  }

  fight() {
    if (this.monsters.length) {
      this.monsters.forEach((monster) => {
        while (this.player1.lifePoints !== -1 && monster.lifePoints !== -1) {
          this.player1.attack(monster);
          monster.attack(this.player1);
        }
      });
    }
    return super.fight();
  }
}
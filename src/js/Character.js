export default class Character {
  constructor(name, type, attack, defence) {
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;

    const player = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name === 'string' && name.length > 1 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректное значение имени');
    }
    if (player.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректное значение типа');
    }
  }
}

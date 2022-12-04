export default class Character {
  constructor(name, type) {
    this.nameControl(name);
    this.typeControl(type);
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }

  nameControl(name) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
      return;
    }
    throw new Error('Неправильное имя');
  }

  typeControl(type) {
    const list = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (list.includes(type)) {
      this.type = type;
      return;
    }
    throw new Error('Неправильный тип');
  }
}

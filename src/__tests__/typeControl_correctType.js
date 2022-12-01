import Character from '../character';

test.each([
  ['Bowman', 'Bowman', 'Bowman'],
  ['Swordsman', 'Swordsman', 'Swordsman'],
  ['Magician', 'Magician', 'Magician'],
  ['Undead', 'Undead', 'Undead'],
  ['Zombie', 'Zombie', 'Zombie'],
  ['Daemon', 'Daemon', 'Daemon'],
])('Testing for the correct type. Type testing "%s"', (_, type, expected) => {
  const newClass = new Character('Testing', type);
  expect(newClass.type).toBe(expected);
});

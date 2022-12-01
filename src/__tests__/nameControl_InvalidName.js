import Character from '../character';

test.each([
  ['W'],
  ['WWWWWWWWWWW'],
])('Testing for an invalid name. Name "%s"', (names) => {
  function err() {
    const testing = new Character(names, 'Bowman');
  }
  expect(err).toThrow();
});

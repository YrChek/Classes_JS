import Character from '../character';

test('Testing for an invalid type', () => {
  function err() {
    const testing = new Character('Testing', 'Improper');
  }
  expect(err).toThrow();
});

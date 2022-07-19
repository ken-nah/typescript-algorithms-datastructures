import persistenceBugger from './PersistentBugger';

describe('Codewars (6kyu) - Persistent Bugger', () => {
  it('should return 4 when given 999', () => {
    expect(persistenceBugger(999)).toEqual(4);
  });

  it('should return 3 when given 39', () => {
    expect(persistenceBugger(39)).toEqual(3);
  });

  it('should return 0 when given 4', () => {
    expect(persistenceBugger(4)).toEqual(0);
  });
});

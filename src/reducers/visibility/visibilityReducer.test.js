const expect = require('expect');
const visibilityReducer = require('./visibilityReducer');

describe('test', () => {
  it('should be true', () => {
    const stateBefore = true;
    const stateAfter = false;
    expect(visibilityReducer(stateBefore)).toEqual(stateAfter);
  });
});
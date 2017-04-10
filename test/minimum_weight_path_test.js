const assert = require('assert');
const minimumWeightPath = require('../js/minimum_weight_path');

describe('#minimumWeightPath', () => {
  it('returns correct path for example input', () => {
    const exampleMatrix = [
      [3, 1, 4],
      [1, 5, 9],
      [2, 6, 5]
    ];
    const result = minimumWeightPath(exampleMatrix);
    assert.strictEqual(result.weight, 4);
    assert.deepEqual(result.path, [1, 1, 2]);
  });

  it('throws if there are no rows', () => {
    const noRows = [];
    assert.throws(() => {
      minimumWeightPath(noRows);
    }, /must have at least one row and one column/);
  });

  it('throws if there are no columns', () => {
    const noColumns = [[]];
    assert.throws(() => {
      minimumWeightPath(noColumns);
    }, /must have at least one row and one column/);
  });

  it('works for a single row', () => {
    const singleRow = [[1, 2, 3]];
    const result = minimumWeightPath(singleRow);
    assert.strictEqual(result.weight, 1);
    assert.deepEqual(result.path, [1]);
  });

  it('works for a single column', () => {
    const singleColumn = [[1], [2], [4]];
    const result = minimumWeightPath(singleColumn);
    assert.strictEqual(result.weight, 7);
    assert.deepEqual(result.path, [1, 2, 4]);
  });

  it('works when the number of rows is not equal to the number of columns', () => {
    const differentRowAndColumnLengths = [
      [1, 5, 9, 2, 0, 2],
      [3, 4, 3, 3, 2, 6]
    ];
    const result = minimumWeightPath(differentRowAndColumnLengths);
    assert.strictEqual(result.weight, 2);
    assert.deepEqual(result.path, [0, 2]);
  });
});

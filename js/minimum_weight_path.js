function minimumWeightPath(inputMatrix) {
  if (inputMatrix.length === 0 || inputMatrix[0].length === 0) {
    throw new Error('must have at least one row and one column');
  }

  const solutionMatrix = [];
  let result;

  for (let i = 0; i < inputMatrix.length; i++) {
    solutionMatrix[i] = solutionMatrix[i] || [];
    for (let j = 0; j < inputMatrix[0].length; j++) {
      if (i === 0) {
        // we're in the first row, so should initialize entries in solution matrix
        solutionMatrix[i][j] = {
          weight: inputMatrix[i][j],
          path: [inputMatrix[i][j]]
        };
      } else {
        // not in first row; look up for minimum path and update entry in solution accordingly
        const up = solutionMatrix[i - 1][j];
        const upLeft = solutionMatrix[i -1][j - 1]; // can be undefined if we're in the leftmost column
        const upRight = solutionMatrix[i -1][j + 1]; // can be undefined if we're in the rightmost column

        const lowestWeightEntry = [up, upLeft, upRight].filter(ancestor => ancestor !== undefined)
          .sort((ancestor1, ancestor2) => ancestor1.weight > ancestor2.weight)[0];

        solutionMatrix[i][j] = {
          weight: lowestWeightEntry.weight + inputMatrix[i][j],
          path: lowestWeightEntry.path.concat(inputMatrix[i][j])
        };
      }

      // if last row, keep track of lowest weight entry
      if (i === inputMatrix.length - 1) {
        if (!result) {
          result = solutionMatrix[i][j];
        } else {
          result = solutionMatrix[i][j].weight > result.weight ?
            result : solutionMatrix[i][j];
        }
      }
    }
  }

  return result;
}

module.exports = minimumWeightPath;

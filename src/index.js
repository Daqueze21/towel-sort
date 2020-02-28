
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let arrayCopy = [...matrix];

  for (let i = 0; i < arrayCopy.length; i++) {
    if (i % 2 === 1) arrayCopy[i].reverse();
  };

  return arrayCopy.flat();
}

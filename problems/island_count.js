//Given a string representation of a 2d map, return the number of islands in the map. 
//Land spaces are denoted by a zero, while water is denoted by a dot. 
//Two land spaces are considered connected if they are adjacent (but not diagonal).

function countIslands(mapStr) {
  var eachRow = mapStr.split('\n')
  var totalArray = [];
  for (var k = 0; k < eachRow.length; k++) {
    totalArray.push(eachRow[k].split(''))
  }
  var islandObject = []
  onIsland = false;
  var number = 0;
  for (var i = 0; i < totalArray.length; i++) {
    for (var j = 0; j < totalArray[i].length; j++) {
      if (totalArray[i][j] == 0) {
        number++;
        rIslands(totalArray, i, j)
      }
    }
  }

  function rIslands(map, i, j) {
    if (i > 0) {
      if (map[i - 1][j] == 0) {
        totalArray[i - 1][j] = 1;
        rIslands(totalArray, i - 1, j)
      }
    }
    if (i < totalArray.length - 1) {
      if (map[i + 1][j] == 0) {
        totalArray[i + 1][j] = 1;
        console.log("Break")
        rIslands(totalArray, i + 1, j)
      }
    }
    if (j > 0) {
      if (map[i][j - 1] == 0) {
        totalArray[i][j - 1] = 1;
        rIslands(totalArray, i, j - 1)
      }
    }
    if (j < totalArray[0].length - 1) {
      if (map[i][j + 1] == 0) {
        totalArray[i][j + 1] = 1;
        rIslands(totalArray, i, j + 1)
      }

    }
  }
  return number
}
module.exports = {countIslands}
function printSquareMatrix(size) {
    size <= 20;
    var mat = Array.from(Array(size), () => new Array(size));
    for (var i = 0; i <= size - 1; i++) {
        for (var j = 0; j < size - 1; j++) {
          mat[i][j] = '*';
        }
    mat[i][j] = '*';
    }
  return mat;
}
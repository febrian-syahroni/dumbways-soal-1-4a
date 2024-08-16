function printSquarePattern(size) {
  if (size % 2 === 0) {
    return;
  }

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        row += "#";
      } else {
        row += "*";
      }
    }
    console.log(row);
  }
}

// Contoh penggunaan
printSquarePattern(7);

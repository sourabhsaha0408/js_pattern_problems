let output = "";


for (i = 0; i < 5; i++) {
  output = "";
  for (j = 0; j < 5; j++) {
    if ((i === 2 && j === 3) || (i === 3 && j === 2) || (i === 3 && j === 3)) {
      output += "  ";
    } else if (i + j >= 4) {
      output += "* ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}

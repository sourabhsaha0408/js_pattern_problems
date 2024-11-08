let output = "";

for (i = 0; i < 6; i++) {
  output = "";
  for (j = 0; j < 5; j++) {
    if (
      // (i === 1 || i === 2 || i === 3 || i === 4) &&
      i !== 0 &&
      i !== 5 &&
      (j === 1 || j === 2 || j === 3)
    ) {
      output += "  ";
    } else {
      output += "* ";
    }
  }
  console.log(output);
}

let output = "";
const n = 10;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < i + 1; j++) {
    if ((i + j) % 2 === 0) {
      output += "* ";
    } else {
      output += "  ";
    }
  }
  console.log(output);
}

for (i = 0; i < n - 1; i++) {
  output = "";
  for (j = 0; j < n - 1 - i; j++) {
    if ((i + j) % 2 === 0) {
      output += "* ";
    } else {
      output += "  ";
    }
  }
  console.log(output);
}
let output = "";
const n =10;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < n + 1; j++) {
    if (i + j === n) {
      output += "* ";
    } else if (j === n) {
      output += "*";
    } else if (i + j > n) {
      output += "  ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}
for (i = 0; i < n - 1; i++) {
  output = "";
  for (j = 0; j < n + 1; j++) {
    if (j === i + 2) {
      output += "* ";
    } else if (j === n) {
      output += "*";
    } else if (j > i + 1) {
      output += "  ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}

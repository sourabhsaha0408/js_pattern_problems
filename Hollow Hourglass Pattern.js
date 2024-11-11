//Hollow Hourglass Pattern

let output = "";
const n = 9;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < n; j++) {
    if (i === 0) {
      output += "* ";
    } else if (i === j) {
      output += "* ";
    } else if (j === n - 1) {
      output += "* ";
    } else if (j > i) {
      output += "  ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}
for (i = 0; i < n - 1; i++) {
  output = "";
  for (j = 0; j < n; j++) {
    if (i === n - 2) {
      output += "* ";
    } else if (i + j === n - 2) {
      output += "* ";
    } else if (j === n - 1) {
      output += "* ";
    } else if (i + j > n - 2) {
      output += "  ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}

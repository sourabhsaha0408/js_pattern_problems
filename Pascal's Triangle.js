//Pascal's Triangle

let output = "";
const n = 9;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < n; j++) {
    if (i + j === n - 1) {
      output += "1 ";
    } else if (j === n - 1) {
      output += "1 ";
    } else if (i + j > n - 1) {
      output += String(i) + " ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}

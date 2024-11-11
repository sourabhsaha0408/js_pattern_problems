//Square Hollow Pattern

let output = "";
const n = 6;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < n - 1; j++) {
    if (i === 0 || i === n - 1) {
      output += "*  ";
    } else if (j === 0 || j === n - 2) {
      output += "*  ";
    } else {
      output += "   ";
    }
  }
  console.log(output);
}

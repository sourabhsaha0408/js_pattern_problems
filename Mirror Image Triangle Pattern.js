let output = "";
let spaceHolder = "";
const n = 10;

for (i = 1; i < n + 1; i++) {
  output = "";
  for (j = i; j < n + 1; j++) {
    output += String(j) + "   ";
  }
  output = spaceHolder + output;
  console.log(output);
  spaceHolder += "  ";
}
for (i = 0; i < n - 1; i++) {
  output = "";
  for (j = 0; j < n; j++) {
    if (i + j >= n - 2) {
      output += String(j + 1) + "   ";
    } else {
      output += "  ";
    }
  }
  console.log(output);
}

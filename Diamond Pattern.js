//Diamond Pattern

let output = "";
const n = 10;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < n; j++) {
    if (i + j >= n - 1) {
      output += "* ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}
for (i = 0; i < n - 1; i++) {
  output = "";
  for (j = 0; j < n; j++) {
    if (j <= i) {
      output += " ";
    } else {
      output += "* ";
    }
  }
  console.log(output);
}

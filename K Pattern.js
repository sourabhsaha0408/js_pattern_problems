//K Pattern

let output = "";
const n = 9;

for (i = n; i > 0; i--) {
  output = "";
  for (j = 0; j < i; j++) {
    output += "* ";
  }
  console.log(output);
}
for (i = 1; i < n; i++) {
  output = "";
  for (j = 0; j < i + 1; j++) {
    output += "* ";
  }
  console.log(output);
}

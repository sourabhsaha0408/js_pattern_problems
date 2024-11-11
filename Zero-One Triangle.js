//Zero-One Triangle

let output = "";
const n = 5;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < i + 1; j++) {
    if ((i + j) % 2 === 0) {
      output += "1 ";
    } else {
      output += "0 ";
    }
  }
  console.log(output);
}

let output = "";
const n = 9;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < n + 1; j++) {
    if (i + j >= n) {
      output += String(i + 1) + " ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}

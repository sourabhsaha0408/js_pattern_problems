let output = "";
const n = 4;

for (i = 0; i < n; i++) {
    
  output = "";
  for (j = 0; j < n; j++) {
    if (i === 3 && j === 0) {
      output += "  ";
    } else if ((i + j) % 2 !== 0 && i + j >= n - 1) {
      output += "* ";
    } else {
      output += "  ";
    }
  }
  console.log(output);
}

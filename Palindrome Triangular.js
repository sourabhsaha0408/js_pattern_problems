//Palindrome Triangular

let output = "";
const n = 1;
let x = 1;
let y = 1;

for (i = 1; i < n + 1; i++) {
  x = 1;
  y = 1;
  output = "";
  for (j = 1; j < n + i; j++) {
    if (j === n) {
      output += "1 ";
    } else if (i + j === n + 1) {
      output += String(i) + " ";
    } else if (j === n + i - 1) {
      output += String(i) + " ";
    } else if (i + j > n + 1 && j < n) {
      output += String(i - x) + " ";
      x++;
    } else if (i + j > n + 1 && j > n) {
      output += String(1 + y) + " ";
      y++;
    } else {
      output += "  ";
    }
  }
  console.log(output);
}

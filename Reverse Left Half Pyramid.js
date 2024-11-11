//Reverse Left Half Pyramid

let output = "";

for (i = 0; i < 5; i++) {
  output = "";
  for (j = 5; j > 0; j--) {
    if (i + j <= 5) {
      output += "* ";
    } else {
      output += "  ";
    }
  }
  console.log(output);
}

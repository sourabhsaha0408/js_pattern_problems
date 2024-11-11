//Number Increasing Reverse Pyramid

let output = "";

for (i = 5; i > 1; i--) {
  output = "";
  for (j = 1; j < i; j++) {
    output += String(j) + " ";
  }
  console.log(output);
}

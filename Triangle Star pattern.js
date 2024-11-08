//Triangle Star pattern

let output = "";

for (i = 0; i < 5; i++) {
  output = "";
  for (j = 0; j < 5; j++) {
    if (i + j >= 4) {
      output += "* ";
    } else {
      output += " ";
    }
  }
  console.log(output);
}

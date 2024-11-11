//Rhombus Pattern

let output = "";
let starHolder = "";
let spaceHolder = "";

for (i = 0; i < 5; i++) {
  output = "";
  starHolder = "";
  for (j = 0; j < 4; j++) {
    starHolder += "* ";
  }
  output += spaceHolder + starHolder;
  console.log(output);
  spaceHolder += " ";
}

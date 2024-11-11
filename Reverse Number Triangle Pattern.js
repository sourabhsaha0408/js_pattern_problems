//Reverse Number Triangle Pattern

let output = "";
let spaceHolder = "";
let numberHolder = "";

for (i = 1; i < 5; i++) {
  output = "";
  numberHolder = "";
  for (j = i; j < 5; j++) {
    numberHolder += String(j) + "  ";
  }
  output += spaceHolder + numberHolder;
  console.log(output);
  spaceHolder += " ";
}

//Output not as expected in line 3 and line 4

let output = "";
let booleanValue = true;

for (i = 1; i < 5; i++) {
  output = "";
  for (j = 0; j < i; j++) {
    if (booleanValue) {
      output += "1 ";
      booleanValue = false;
    } else {
      output += "0 ";
      booleanValue = true;
    }
  }

  console.log(output);
}

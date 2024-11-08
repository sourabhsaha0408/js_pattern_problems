let output = "";
let sum = 0;

for (i = 1; i < 5; i++) {
  output = "";
  for (j = 0; j < i; j++) {
    sum++;
    output += String(sum) + " ";
  }
  console.log(output);
}

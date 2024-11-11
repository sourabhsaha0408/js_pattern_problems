let output = "";
const n = 4;

for (i = 0; i < n; i++) {
  output = "";
  for (j = 0; j < n; j++) {
    if (j > i) {
      output += "  ";
    } else if (i === n - 1 && j === n - 1) {
      output += "* ";
    } else if ((i + j) % 2 === 0) {
      output += "* ";
    } else {
      output += "  ";
    }
  }
  if (n % 2 !== 0) {
    for (k = 0; k < n; k++) {
      if (k === 0) {
        output += "";
      } else if ((i + k) % 2 === 0 && i + k >= n - 1) {
        output += "* ";
      } else {
        output += "  ";
      }
    }
  }
  if (n % 2 === 0) {
    for (k = 0; k < n; k++) {
      if (k === 0) {
        output += "";
      } else if ((i + k) % 2 !== 0 && i + k >= n - 1) {
        output += "* ";
      } else {
        output += "  ";
      }
    }
  }
  console.log(output);
}

for (i = 0; i < n - 1; i++) {
  output = "";
  if (n % 2 === 0) {
    for (j = 0; j < n - 1; j++) {
      if ((i + j) % 2 === 0 && i + j <= n - 2) {
        output += "* ";
      } else {
        output += "  ";
      }
    }
  }
  if (n % 2 !== 0) {
    for (j = 0; j < n - 1; j++) {
      if ((i + j) % 2 !== 0 && i + j <= n - 2) {
        output += "* ";
      } else {
        output += "  ";
      }
    }
  }
  for (k = 0; k < n; k++) {
    if ((i + k) % 2 !== 0 && k > i) {
      output += "* ";
    } else {
      output += "  ";
    }
  }
  console.log(output);
}

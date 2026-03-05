let n = 7;

let a = new Array(n);
for (let i = 0; i < n; i++) {
  a[i] = new Array(n);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

// zewnętrzne brzegi
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// szachownica

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// b) przektna

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j - i == 0) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// c) przektna

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i + j == n - 1) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// d)Co drugi element obramowania 1 ?????

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if ((i == 0 || i == n - 1 || j == 0 || j == n - 1) && (i + j) % 2 == 0) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// e)Co drugi element obramowania 1

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i % 2 == 0) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// f) Co druga kolumna jedynkami

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j % 2 == 0) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// g) Co drugi skos jedynkami

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// h) obie przekatne jedynkami, środek 2

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i + j == n - 1 || j - i == 0) {
      a[i][j] = 1;
    }
    if (Math.ceil(n / 2 - 1) == i && Math.ceil(n / 2 - 1) == j) {
      a[i][j] = 2;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// i) potrójna przektna

document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j - i == -1 || j - i == 0 || j - i == 1) {
      a[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// j) wiersze kolejno: 0, 1, 2, 0, 1, 2, itd.
document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = i % 3;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// k) skosy kolejno 0,1,2,0,1,2
document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = (i + j) % 3;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// l) Narożne i środkowy jedynkami, co drugi skos dwójkami
document.write("<br>");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a[i][j] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if ((i + j) % 2 == 0) {
      a[i][j] = 2;
    }
  }
}

a[0][0] = 1;
a[0][n - 1] = 1;
a[n - 1][0] = 1;
a[n - 1][n - 1] = 1;
a[Math.floor(n / 2)][Math.floor(n / 2)] = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br>");
}

// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     document.write("🟥 ");
//   }
//   document.write("<br>");
// }

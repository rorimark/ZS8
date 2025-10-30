function power(x, y) {
  if (isNaN(x)) {
    return "Error";
  }
  let p = 1;
  if (y === 0) {
    return 1;
  } else {
    for (let i = 0; i < y; i++) {
      p *= x;
    }
    return p;
  }
}

function sqrRoot(a) {
  if (isNaN(a)) {
    return "Error";
  }
  let x = a;
  for (let i = 0; i < 100; i++) {
    x = 0.5 * (x + a / x);
  }
  return x;
}

function delLast(a) {
  return a.slice(0, -1);
}

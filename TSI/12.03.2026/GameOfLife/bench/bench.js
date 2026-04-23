const ROWS = 1000;
const COLS = 1000;
const SIZE = ROWS * COLS;
const ITERATIONS = 100;
const WARMUP = 5;
const RUNS = 3;
const ALIVE_CHANCE = 0.5;

const NEIGHBOR_OFFSETS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function hrMs() {
  return Number(process.hrtime.bigint()) / 1e6;
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let value = bytes;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i += 1;
  }
  return `${value.toFixed(2)} ${units[i]}`;
}

function measureAlloc(label, allocator) {
  if (global.gc) global.gc();
  const before = process.memoryUsage().heapUsed;
  const obj = allocator();
  if (global.gc) global.gc();
  const after = process.memoryUsage().heapUsed;
  const diff = after - before;
  console.log(`${label} heapUsed delta: ${formatBytes(diff)}`);
  return obj;
}

function createEmptyArrayGrid() {
  return Array.from({ length: ROWS }, () => new Array(COLS).fill(0));
}

function createRandomArrayGrid() {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () =>
      Math.random() < ALIVE_CHANCE ? 1 : 0,
    ),
  );
}

function createEmptyUint8Grid() {
  return new Uint8Array(SIZE);
}

function createRandomUint8Grid() {
  const grid = new Uint8Array(SIZE);
  for (let i = 0; i < SIZE; i += 1) {
    grid[i] = Math.random() < ALIVE_CHANCE ? 1 : 0;
  }
  return grid;
}

function nextGenArray(current, next) {
  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) {
      let neighbors = 0;
      for (const [dr, dc] of NEIGHBOR_OFFSETS) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) continue;
        neighbors += current[nr][nc];
      }
      if (current[r][c] === 1) {
        next[r][c] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        next[r][c] = neighbors === 3 ? 1 : 0;
      }
    }
  }
}

function nextGenUint8(current, next) {
  for (let r = 0; r < ROWS; r += 1) {
    const rowBase = r * COLS;
    for (let c = 0; c < COLS; c += 1) {
      const index = rowBase + c;
      let neighbors = 0;
      for (const [dr, dc] of NEIGHBOR_OFFSETS) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) continue;
        neighbors += current[nr * COLS + nc];
      }
      if (current[index] === 1) {
        next[index] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        next[index] = neighbors === 3 ? 1 : 0;
      }
    }
  }
}

function bench(label, fn) {
  for (let i = 0; i < WARMUP; i += 1) fn();
  let total = 0;
  let last;
  for (let i = 0; i < RUNS; i += 1) {
    const start = hrMs();
    last = fn();
    const end = hrMs();
    total += end - start;
  }
  const avg = total / RUNS;
  console.log(`${label}: ${avg.toFixed(2)} ms avg over ${RUNS} runs`);
  return last;
}

console.log(
  `Grid: ${ROWS} x ${COLS} (${SIZE} cells), iterations: ${ITERATIONS}, warmup: ${WARMUP}, runs: ${RUNS}`,
);
console.log("Memory allocation (heapUsed):");

const arrayGrid = measureAlloc("Array grid", createRandomArrayGrid);
const uint8Grid = measureAlloc("Uint8Array grid", createRandomUint8Grid);

console.log("\nSpeed test (next generation):");

bench("Array grid", () => {
  let current = arrayGrid;
  let next = createEmptyArrayGrid();
  for (let i = 0; i < ITERATIONS; i += 1) {
    nextGenArray(current, next);
    const tmp = current;
    current = next;
    next = tmp;
  }
  return current;
});

bench("Uint8Array grid", () => {
  let current = uint8Grid;
  let next = createEmptyUint8Grid();
  for (let i = 0; i < ITERATIONS; i += 1) {
    nextGenUint8(current, next);
    const tmp = current;
    current = next;
    next = tmp;
  }
  return current;
});

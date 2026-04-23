import { useEffect, useRef, useState } from "react";

const NUM_ROWS = 2000;
const NUM_COLS = 260;
const CELL_SIZE = 4;
const ALIVE_CHANCE = 0.4;

const ALIVE_COLOR = [31, 107, 74, 255];
const DEAD_COLOR = [240, 229, 215, 255];

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

const SIZE = NUM_ROWS * NUM_COLS;

function createEmptyGrid() {
  return new Uint8Array(SIZE);
}

function createRandomGrid() {
  const grid = new Uint8Array(SIZE);
  for (let i = 0; i < SIZE; i += 1) {
    grid[i] = Math.random() < ALIVE_CHANCE ? 1 : 0;
  }
  return grid;
}

function nextGeneration(current, next) {
  for (let r = 0; r < NUM_ROWS; r += 1) {
    const rowBase = r * NUM_COLS;
    for (let c = 0; c < NUM_COLS; c += 1) {
      const index = rowBase + c;
      let neighbors = 0;

      for (const [dr, dc] of NEIGHBOR_OFFSETS) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= NUM_ROWS || nc < 0 || nc >= NUM_COLS) continue;
        neighbors += current[nr * NUM_COLS + nc];
      }

      if (current[index] === 1) {
        next[index] = neighbors === 2 || neighbors === 3 ? 1 : 0;
      } else {
        next[index] = neighbors === 3 ? 1 : 0;
      }
    }
  }
}

export default function App() {
  const [running, setRunning] = useState(false);
  const [speedMs, setSpeedMs] = useState(1);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const imageDataRef = useRef(null);

  const gridRef = useRef(createEmptyGrid());
  const nextRef = useRef(createEmptyGrid());

  const runningRef = useRef(running);
  const speedRef = useRef(speedMs);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  useEffect(() => {
    speedRef.current = speedMs;
  }, [speedMs]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = NUM_COLS;
    canvas.height = NUM_ROWS;
    const ctx = canvas.getContext("2d", { alpha: false });
    ctx.imageSmoothingEnabled = false;
    ctxRef.current = ctx;
    imageDataRef.current = ctx.createImageData(NUM_COLS, NUM_ROWS);
    draw();
  }, []);

  const draw = () => {
    const ctx = ctxRef.current;
    const imageData = imageDataRef.current;
    if (!ctx || !imageData) return;

    const data = imageData.data;
    const grid = gridRef.current;

    for (let i = 0; i < SIZE; i += 1) {
      const offset = i * 4;
      if (grid[i]) {
        data[offset] = ALIVE_COLOR[0];
        data[offset + 1] = ALIVE_COLOR[1];
        data[offset + 2] = ALIVE_COLOR[2];
        data[offset + 3] = ALIVE_COLOR[3];
      } else {
        data[offset] = DEAD_COLOR[0];
        data[offset + 1] = DEAD_COLOR[1];
        data[offset + 2] = DEAD_COLOR[2];
        data[offset + 3] = DEAD_COLOR[3];
      }
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const step = () => {
    nextGeneration(gridRef.current, nextRef.current);
    const tmp = gridRef.current;
    gridRef.current = nextRef.current;
    nextRef.current = tmp;
    draw();
  };

  const toggleCellAtCanvasPoint = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((event.clientX - rect.left) / rect.width) * NUM_COLS);
    const y = Math.floor(((event.clientY - rect.top) / rect.height) * NUM_ROWS);
    if (x < 0 || x >= NUM_COLS || y < 0 || y >= NUM_ROWS) return;
    const index = y * NUM_COLS + x;
    gridRef.current[index] = gridRef.current[index] ? 0 : 1;
    draw();
  };

  useEffect(() => {
    if (!running) return;

    const tick = (time) => {
      if (!runningRef.current) return;
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      if (delta >= speedRef.current) {
        step();
        lastTimeRef.current = time;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
    };
  }, [running]);

  return (
    <div className="page">
      <header className="header">
        <h1>Game of Life</h1>
        <p className="subtitle">
          Birth with 3 neighbors. Survival with 2 or 3. Outside the grid is
          dead.
        </p>
      </header>

      <div className="controls">
        <button
          className="primary"
          onClick={() => setRunning((r) => !r)}
          type="button"
        >
          {running ? "Pause" : "Run"}
        </button>
        <button onClick={step} type="button" disabled={running}>
          Step
        </button>
        <button
          onClick={() => {
            setRunning(false);
            gridRef.current = createEmptyGrid();
            draw();
          }}
          type="button"
        >
          Clear
        </button>
        <button
          onClick={() => {
            gridRef.current = createRandomGrid();
            draw();
          }}
          type="button"
        >
          Random
        </button>

        <label className="speed">
          Speed: {speedMs} ms
          <input
            type="range"
            min="20"
            max="500"
            step="10"
            value={speedMs}
            onChange={(e) => setSpeedMs(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="canvas-wrapper">
        <canvas
          ref={canvasRef}
          className="life-canvas"
          style={{
            width: `${NUM_COLS * CELL_SIZE}px`,
            height: `${NUM_ROWS * CELL_SIZE}px`,
          }}
          onClick={toggleCellAtCanvasPoint}
        />
      </div>
    </div>
  );
}

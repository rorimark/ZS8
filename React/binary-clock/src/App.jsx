import { useEffect, useState } from "react";
import "./App.css";

import Binary from "./Binary";

function App() {
  const binaryTime = () => {
    const d = new Date();

    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    const divide = (x) => [
      Math.floor(x / 10)
        .toString(2)
        .padStart(4, "0"),
      (x % 10).toString(2).padStart(4, "0"),
    ];

    return [...divide(h), ...divide(m), ...divide(s)];
  };

  const [time, setTime] = useState(binaryTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(binaryTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="App">
        {time.map((x, i) => (
          <Binary key={i} value={x} />
        ))}
      </div>
    </>
  );
}

export default App;

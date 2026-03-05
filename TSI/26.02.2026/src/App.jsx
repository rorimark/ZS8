import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [arabianConverted, setArabianConverted] = useState();
  const [romanConverted, setRomanConverted] = useState();

  const ref = useRef(null);

  const romanSeed = ["I", "V", "X", "L", "C", "D", "M"];
  const arabianSeed = ["1", "5", "10", "50", "100", "500", "1000"];

  // const convert = (number) => {};

  const handleSubmit = (number) => {
    for (let i = 0; i < number.length; i++) {
      if (number.charAt(i) >= number.charAt(i + 1)) {
        setRomanConverted(romanSeed[i] + romanSeed[i + 1]);
      } else {
        setRomanConverted(number[i]);
      }
    }
  };

  return (
    <>
      <input type="text" placeholder="Wpisz arabskie cyfry" ref={ref} />
      <input type="text" value={arabianConverted} />
      <input
        type="submit"
        value={"Konwertuj"}
        onClick={() => {
          handleSubmit(ref.current.value);
        }}
      />
      <br />
      <br />
      <input type="text" placeholder="Wpisz rzymskie cyfry" />
      <input type="text" />
      <input type="submit" value={"Konwertuj"} />
    </>
  );
}

export default App;

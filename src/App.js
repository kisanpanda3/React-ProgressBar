import { useEffect, useState } from "react";
import ProgressBar from "./Components/ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + 1);
    }, 100);
  }, []);
  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar value={value} />
    </div>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const onClickMinus = () => {
    setCount(count - 1);
  };
  const onClickPlus = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <div>
        <p>Счетчик:</p>
        <p>
          <strong>{count}</strong>
        </p>
        <button className="minus" onClick={onClickMinus}>
          - Минус
        </button>
        <button className="plus" onClick={onClickPlus}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;

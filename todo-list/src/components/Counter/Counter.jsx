import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newIncrement = count + 1;

    setCount(newIncrement);
  };

  return (
    <div className="counterContainer">
      <span className="counterText">Counter now in: {count}</span>
      <button onClick={increment} className="counterButton">
        Increment counter dos
      </button>
    </div>
  );
};

export default Counter;

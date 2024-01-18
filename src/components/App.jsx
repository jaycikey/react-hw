import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Click me! - {count}</button>
    </div>
  );
};

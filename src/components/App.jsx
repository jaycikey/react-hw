import { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Total clicks -  {count}</button>;
};
export const App = () => {
 

  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
};

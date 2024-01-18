import { useState } from 'react';

const Button = ({value, onUpdate}) => {
  

  return <button onClick={onUpdate}>Total clicks -  {value}</button>;
};
export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p> Total clicks: {count}</p>
      <Button value={count} onUpdate={handleClick} />
      <Button value={count} onUpdate={handleClick} />
    </div>
  );
};

import { useState } from 'react';

const Clicker = ({ value, onUpdate }) => {
  const [clicks, setClicks] = useState(0);
  
  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
    <div>
      <button onClick={onUpdate}>Total clicks - {value}</button>
      <button onClick={handleClick}>Update my clicks - {clicks}</button>
    </div>
  );
};
export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const [user, setUser] = useState({
    userName: 'Mango',
    age: 2,
    isOnline: true,
  });
  const changeUser = () => {
setUser({...user,age: 3})
  }

  return (
    <div>
      <p> Total clicks: {count}</p>
      <Clicker value={count} onUpdate={handleClick} />
      <Clicker value={count} onUpdate={handleClick} />
      <button onClick={changeUser}>Change User</button>
    </div>
  );
};

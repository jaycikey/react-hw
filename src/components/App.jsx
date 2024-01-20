import { useEffect } from 'react';
import { useState } from 'react';

export const App = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('Clicks update: ', clicks);
  }, [clicks]);
  return (
    <button onClick={()=> {setClicks(clicks + 1)}}>You clicked {clicks} times</button>
  );
};

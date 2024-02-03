import { useEffect, useRef } from 'react';

export const App = () => {
  const valuerRef = useRef(0);

  useEffect(() => {
    console.log(valuerRef.current);
  });

  const handleClick = () => {
    valuerRef.current += 1;
  };
  return <button onClick={handleClick}>Click to update ref value</button>;
};

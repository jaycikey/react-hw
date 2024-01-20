import { useEffect } from 'react';
import { useState } from 'react';

export const App = () => {
  const [firts, setFirts] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log('Firts update: ', firts);
  }, [firts]);

  useEffect(()=> {
    console.log("Second update: ", second);
  }, [second])

  useEffect(()=>{
    console.log("Firts or second update: ", firts + second)
  }, [firts, second])

  return (
    <>
    <button onClick={() => setFirts(firts + 1)}> Firts: {firts}</button>
    <button onClick={() => setSecond(second + 1)}> Second: {second}</button>
    </>
  );
};

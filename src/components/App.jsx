export const App = () => {
  let clicks = 0;

  const handleClick = () => {
    clicks = clicks + 1;
  }
  return <button onClick={handleClick}>Current: {clicks}</button>
};

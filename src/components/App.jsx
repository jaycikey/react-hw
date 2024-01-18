
export const App = () => {
  const handleClick = () => {
    console.log(Date.now());
  }
  const handleEnter = (evt) => {
    console.log(evt)
  }
  return (
    <div>
      <button onClick={handleClick} onMouseEnter={handleEnter}>Click me!</button>
    </div>
  );
};

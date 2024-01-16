export const App = () => {
  const handleClick = (evt) => {
    console.log(evt);
  }
  return (
    <>
    <button onClick={handleClick}>Fist button</button>
    <button onClick={evt => console.log(evt)}>Second button</button>
    </>
  )
};

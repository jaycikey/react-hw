const CustomButton = ({ message, children}) => {
  return(
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}
export const App = () => {
  const handleClick = (evt) => {
    console.log(evt);
  }
  return (
    <>
    <CustomButton message="Plaing music!">
      Play some music
    </CustomButton>
    <CustomButton message="Uploading your data!">
      Upload data
    </CustomButton>
    </>
  )
};

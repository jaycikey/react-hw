import { useToggle } from '../hooks/useToggle';

export const MyComponent = () => {
  const { isOpent, open, close } = useToggle(true);

  return (
    <>
      <button onClick={open}>OpenModal</button>
      <Modal isOpent={isOpent} onClose={close} />
    </>
  );
};

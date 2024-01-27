import { useId } from 'react';

export const Mycomponent = () => {
  const id = useId();

  return(
    <div>
        <label htmlFor={id}>Text field lable</label>
        <input type="text" id={id} />
    </div>
  )
};

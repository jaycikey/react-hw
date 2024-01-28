import { useId } from 'react';

export const PaymentForm = ({ onSubmit }) => {
  const usernameFieldId = useId();

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.target.elements.username.value);
    evt.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={usernameFieldId}>Username</label>
        <input type="text" name="username" id={usernameFieldId} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
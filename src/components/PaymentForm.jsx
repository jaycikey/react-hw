import { useState, useId } from 'react';

export const PaymentForm = ({ onSubmit }) => {
  const usernameFieldId = useId();
  const selectId = useId();

  const [username, setUsername] = useState('');
  const [paymentMethhod, setpaymentMethhod] = useState('visa');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({
        username, paymentMethhod,
    });
    evt.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={usernameFieldId}>Username</label>
        <input
          type="text"
          id={usernameFieldId}
          value={username}
          onChange={evt => setUsername(evt.target.value)}
        />
        <button type="submit">Submit</button>
        <div>
          <select
            id={selectId}
            name="payment"
            value={paymentMethhod}
            onChange={evt => setpaymentMethhod(evt.target.value)}
          >
            <option value="apple">Apple</option>
            <option value="visa">Visa</option>
            <option value="cash">Cash</option>
          </select>
        </div>
      </form>
    </div>
  );
};

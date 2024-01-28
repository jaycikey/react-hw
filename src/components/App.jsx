import { useState } from 'react';
import { PaymentForm } from './PaymentForm';

export const App = () => {
  // const makePayment = username => {
  //   console.log('MakePyament:', username);
  // };
  const [inputValue, setInputValue] = useState('');
  const [paymentMethhod, setpaymentMethhod] = useState('visa');

  return (
    <>
      {/* <PaymentForm onSubmit={makePayment} /> */}
      <input type="text" value={inputValue} onChange={evt => setInputValue(evt.target.value)} />
      <p>{inputValue}</p>

      <select
        name="payment"
        value={paymentMethhod}
        onChange={evt => setpaymentMethhod(evt.target.value)}
      >
        <option value="apple">Apple</option>
        <option value="visa">Visa</option>
        <option value="cash">Cash</option>
      </select>
    </>
  );
};

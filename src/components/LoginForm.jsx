import { useId, useState } from 'react';

export const LoginForm = () => {
  const loginId = useId();
  const passwordId = useId();

  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input
        type="text"
        name="login"
        id={loginId}
        value={values.login}
        onChange={handleChange}
      />

      <label htmlFor={passwordId}>Password</label>
      <input
        type="password"
        name="password"
        id={passwordId}
        value={values.password}
        onChange={handleChange}
      />

      <button type="submit">Log in</button>
    </form>
  );
};

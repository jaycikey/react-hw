import { LoginForm } from './LoginForm';

export const App = () => {
  const handleLogin = userData => {
    console.log(userData);
  };
  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm onSubmit={handleLogin}/>
    </div>
  );
};

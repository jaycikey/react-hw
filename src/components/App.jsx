import { LoginForm } from './LoginForm';
import { Mycomponent } from './MyComponent';
import { SearchBar } from './SearchBar';

export const App = () => {
  const handleLogin = userData => {
    console.log(userData);
  };
  return (
    <div>
      {/* <h1>Please login to your account!</h1>
      <LoginForm onSubmit={handleLogin}/>
      <Mycomponent /> */}
      <SearchBar/>
    </div>
  );
};

import { useState } from 'react';
import { LangSwitcher } from './LangSwitcher';
import { LoginForm } from './LoginForm';
import { Mycomponent } from './MyComponent';
import { SearchBar } from './SearchBar';

export const App = () => {
  const handleLogin = userData => {
    console.log(userData);
  };

  const [lang, setLang] = useState('uk');
  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm onSubmit={handleLogin}/>
      <Mycomponent /> 
      <SearchBar/>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </div>
  );
};

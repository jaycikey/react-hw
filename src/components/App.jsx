import { useState } from 'react';
import { LangSwitcher } from './LangSwitcher';
import { LoginForm } from './LoginForm';
import { Mycomponent } from './MyComponent';
import { SearchBar } from './SearchBar';
import { RadioSelect } from './RadioSelect';
import { Checkbox } from './Checkbox';

export const App = () => {

  const [lang, setLang] = useState('uk');
  const [coffeeSize, setCoffeeSize] = useState('sm');

  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm />
      <Mycomponent />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <RadioSelect coffeeSize={coffeeSize} onChange={setCoffeeSize} />
      <Checkbox />
    </div>
  );
};

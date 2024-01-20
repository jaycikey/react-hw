import { useEffect, useState } from 'react';

export const App = () => {
  const [clicks, setClicks] = useState(() => {
    // Зчитуємо значення за ключем
    const savedClicks = window.localStorage.getItem('saved-clicks');

    //Якщо там щось є, повертажємо це
    //значення як початкове значення стану
    if (savedClicks !== null) {
      // localStorage.getItem(). Метод localStorage зберігає всі дані у вигляді рядків, незалежно від їх первісного типу. Тому, коли ви зберігаєте число, наприклад, кількість натискань кнопки, воно конвертується в рядок перед збереженням. Під час отримання цього значення назад з localStorage, воно все ще є рядком.
      return parseInt(savedClicks, 10)  // або +savedClicks
    }

    //У протилежному випадку повертаємо
    // яке-небудь значення за замовчуванням
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

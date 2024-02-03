import { useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      //Тут будемо виконувати HTTP-запит
    }
    //2. Викликаємо її одразу після оголошення
    fetchArticles();
  }, []);
  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};

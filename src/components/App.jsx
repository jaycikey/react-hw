import { useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      //Тут будемо виконувати HTTP-запит
      const response = await axios.get(
        'https://hn.algolia.com/api/v1/search?query=react'
      );
      console.log(response);
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

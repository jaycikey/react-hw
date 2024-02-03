import { useEffect, useState } from 'react';
import axios from 'axios';

export const App = () => {
  // 1. Оголошуемо стан
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // 2. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      //Тут будемо виконувати HTTP-запит
      const response = await axios.get(
        'https://hn.algolia.com/api/v1/search?query=react'
      );
      //3. Записуемо данні в стан
      setArticles(response.data.hits);
    }
    //4. Викликаємо її одразу після оголошення
    fetchArticles();
  }, []);
  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

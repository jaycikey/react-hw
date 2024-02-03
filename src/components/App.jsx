import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArticleList } from './ArticleList';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setEror] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        //1. Встановлюємо індикатор в trey перед запитом
        setLoading(true);
        const response = await axios.get(
          'https://hn.algolia.com/api/v1/search?query=react'
        );
        setArticles(response.data.hits);
      } catch (error) {
        // Встановлюємо стан error в true
        setEror(true);
      } finally {
        //2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);
  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, somthing went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

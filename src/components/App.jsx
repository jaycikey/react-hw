import { useState } from 'react';
import { fetchArticlesWithTopic } from '../articles-api.js';
import { ArticleList } from './ArticleList';
import { SearchForm } from './SearchForm';
import { Loader } from './Loader.jsx';
import { Error } from './Error.jsx';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    async function fetchArticles() {
      try {
        setArticles([]);
        setError(false);
        setLoading(true);
        const data = await fetchArticlesWithTopic(topic);
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  };

  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

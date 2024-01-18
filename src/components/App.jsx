// import { useState } from 'react';
import { Reader } from './Reader';
import articles from '../articles.json';

export const App = () => {
  return (
    <div>
      <Reader items={articles} />
    </div>
  );
};

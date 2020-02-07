import React from 'react';
import './App.css';
import { ListArticles, AddArticle } from './components/articles';

export const App = () => {
  return (
    <>
      <div>
        <h2>Current articles</h2>
        <ListArticles />
      </div>
      <div>
        <h2>Add new article</h2>
        <AddArticle />
      </div>
    </>
  );
}

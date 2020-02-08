import React from 'react';
import './App.css';
import { AddArticle } from './components/articles';
import { ArticlesListContainer } from './containers/articles';

export const App = () => {
  return (
    <>
      <div>
        <h2>Current articles</h2>
        <ArticlesListContainer />
      </div>
      <div>
        <h2>Add new article</h2>
        <AddArticle />
      </div>
    </>
  );
}

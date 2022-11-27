import React from 'react'
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

function HomePage() {
  return (
    <div>
        <h1 className=' font-semibold text-3xl'>Welcome to my Blog</h1>
        <ArticlesList articles={articles} />
        </div>
  );
}

export default HomePage;
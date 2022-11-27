import React from 'react'
import { Link } from 'react-router-dom';
import articles from './article-content';

function ArticlesList() {
  return (
    <div>
      <h1>Our Articles</h1>
      {articles.map((article) => (
        <Link to={`/article/${article.name}`}>
          <h2>{article.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default ArticlesList;
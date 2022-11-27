import React from 'react'
import { Link } from 'react-router-dom';

function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map((article, key) => (
        <Link to={`/article/${article.name}`} key={key}>
          <img alt='photos' src={article.image}></img>
          <h2>{article.title}</h2>
          <p>{article.content[0].substring(0, 150)}....</p>
        </Link>
      ))}
    </div>
  );
}

export default ArticlesList;
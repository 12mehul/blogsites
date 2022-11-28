import React from 'react'
import { Link } from 'react-router-dom';

function ArticlesList({ articles }) {
  return (
    <div>
      <div className='ArticlesList-container float-left'>
        {articles.map((article, key) => (
          <Link to={`/article/${article.name}`} key={key} className=" lowercase">
            <div>
            <img alt='photos' src={article.image} width={300} height={300} />
            </div>
            <h2 className=" ArticlesList-title text-2xl font-semibold text-gray-800 capitalize">{article.title}</h2>
            <p className=" ArticlesList-content capitalize">{article.content[0].substring(0, 100)}....</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
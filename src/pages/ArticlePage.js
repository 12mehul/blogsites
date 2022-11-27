import React from 'react'
import { useParams } from "react-router-dom";
import articles from './article-content';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  if (!article) return <h1> 404 Article does not exist</h1>;
  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </div>
  );
}

export default ArticlePage;
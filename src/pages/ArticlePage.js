import React from 'react'
import { useParams } from "react-router-dom";
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  if (!article) return <h1> 404 Article does not exist</h1>;

  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h1> Other Articles</h1>
      <ArticlesList articles={otherArticles} />
    </div>
  );
}

export default ArticlePage;
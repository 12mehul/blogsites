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
      <div className='ArticlePage-title'>
        <h1 className=" text-3xl font-semibold text-gray-800 capitalize border-b-2 border-red-700 ml-8">{article.title}</h1>
      </div>
      <img alt='photos' src={article.image} width={500} height={500} className=" pl-20 pt-8" />
      <div className='ArticlePage-paragraph'>
        {article.content.map((paragraph, key) => (
          <p key={key} className=" text-xl font-normal text-black leading-8 text-left p-3 pl-10">{paragraph}</p>
        ))}
      </div>
      <h1 className=' font-semibold text-2xl pl-10'> Other Articles</h1>
      <ArticlesList articles={otherArticles} />
    </div>
  );
}

export default ArticlePage;
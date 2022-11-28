import React from 'react'
import ArticlesList from '../components/ArticlesList'
import articles from './article-content';
function ArticlesPage() {
  return (
    <div>
        <h1 className=' font-semibold text-2xl pl-5'> Our Articles</h1>
        <ArticlesList articles={articles} />
    </div>
  )
}

export default ArticlesPage;
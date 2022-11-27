import React from 'react'
import ArticlesList from '../components/ArticlesList'
import articles from './article-content';
function ArticlesPage() {
  return (
    <div>
        <h1> Our Articles</h1>
        <ArticlesList articles={articles} />
    </div>
  )
}

export default ArticlesPage;
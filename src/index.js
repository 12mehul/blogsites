import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
//import ArticlesList from './ArticlesList';
import ArticlePage from './pages/ArticlePage';
import ArticlesPage from './pages/ArticlesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/about" element={<AboutPage />} exact />
      <Route path="/articles" element={<ArticlesPage />} exact />
      <Route path="/article/:name" element={<ArticlePage />} exact />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
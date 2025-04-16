import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import Card from './component/Card';
import Section from './component/Section';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Card  title = 'React Card' description ='This is a simple card component built with React.'/>
    <Section copyright =  'Rich Section' year = '2025' />
  </React.StrictMode>
);

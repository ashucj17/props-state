import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import Card from './component/Card';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Card  title = 'React Card' description ='This is a simple card component built with React.'/>
  </React.StrictMode>
);

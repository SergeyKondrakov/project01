import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: "Hi, how are you?" },
  { id: 2, message: "It's my first post" },
]

let dialogsData = [
  {id: 1, name: "Xavier Dumoulie" },
  {id: 2, name: "Анастасия Вишникина" },
  {id: 3, name: "Олег Блохин" },
  {id: 4, name: "Анастасия Клименкова" },
]

let messagesData = [
  {id: 1, message: "Быть или не быть - вот в чем вопрос." },
  {id: 2, message: "Мой дядя самых честных правил, когда не в шутку занемог..." },
  {id: 3, message: "Всё смешалось в доме Облонских" },
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

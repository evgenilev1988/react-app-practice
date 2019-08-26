import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
//import Header from './components/Header';
import Game from './components/footer';
import AppHeader from './components/appheader';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<AppHeader customHeader="header-style"></AppHeader>, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />,document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

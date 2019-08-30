import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//import Header from './components/Header';
//import Game from './components/footer';
import App from './components/App';
import Home from './pages/home';
import * as serviceWorker from './serviceWorker';
import LoginScreen from './pages/login';


const headerItems = {
    header:[{
        title:"Home",
        active:true
    },
    {
        title:"News",
        active:false
    },
    {
        title:"Contact",
        active:false
    }]
}

ReactDOM.render(<LoginScreen headerProperties={headerItems}></LoginScreen>, document.getElementById('root'));
//ReactDOM.render(<App customHeader="header-style" startingPage="Home" headerProperties={headerItems}></App>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

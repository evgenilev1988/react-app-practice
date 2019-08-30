import React from 'react';
import ReactDOM from 'react-dom';
import { Button, View, Text } from 'react-native';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../styles/general.css';
import '../styles/home.css';
import App from '../components/App';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: this.props.headerProperties,
            headerTitle: this.props.title,
            email: "",
            password: ""
        }
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleLogin() {
        console.log("EMail: " + this.state.email);
        console.log("Password: " + this.state.password);
        
        this.renderSucessfulLogin();
    }

    renderSucessfulLogin(){
        ReactDOM.render(<App customHeader="header-style" startingPage="Home" headerProperties={this.state.menu} userName={this.state.email}></App>, document.getElementById('root'));
    }

    render() {
        return (
            <div>
                <h1 className="display-2">{this.state.headerTitle}</h1>

                <Form>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
                    <button type="button" onClick={this.handleLogin.bind(this)}>Login</button>
                </Form>
            </div>
        );
    }
}
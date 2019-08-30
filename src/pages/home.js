import React from 'react';
import { Button, View, Text } from 'react-native';
import { Container,Row,Col } from 'react-bootstrap';
import '../styles/general.css';
import '../styles/home.css';
import HeaderTitle from '../components/headerTitle.js';

export default class HomeScreen extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderTitle title={this.props.title}/>
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
import React from 'react';
import { Button, View, Text } from 'react-native';
import HeaderTitle from '../components/headerTitle.js';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ContactScreen extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle title={this.props.title} />
      </div>
    );
  }
}
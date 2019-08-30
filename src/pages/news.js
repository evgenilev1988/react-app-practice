import React from 'react';
import HeaderTitle from '../components/headerTitle.js';

export default class NewsScreen extends React.Component {
  render() {
    return (
      <div>
        <HeaderTitle title={this.props.title}/>
      </div>
    );
  }
}

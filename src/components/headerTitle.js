import React from 'react';


export default class HeaderTitle extends React.Component {
  render() {
    return (
      <h1 className="display-2">{this.props.title}</h1>
    );
  }
}
import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleClass() {
    console.log('clicked');
  };

  render() {
    return (
      <div className={this.props.activeState ? "active" : null} onClick={this.toggleClass}>{this.props.name}</div>
    );
  }
}

export default CustomButton;

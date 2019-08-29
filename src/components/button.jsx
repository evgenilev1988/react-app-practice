import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  childHandleClick(e) {
    this.props.onBigButtonClick(this.props.name);
  }

  render() {
    return (
      <div className={this.props.activeState ? "active" : ""} onClick={this.childHandleClick.bind(this)}>{this.props.name}</div>
    );
  }
}

export default CustomButton;

import React from 'react';


const buttonOptions = {
  active: 'active',
  noactive: ''
}

export default class CustomButton extends React.Component {
  /*constructor(props) {
    super(props);
    var x = props;
  }*/

  childHandleClick(e) {
    this.props.onAppClick(this.props.name);
  }

  render() {
    var classValue = this.props.activeState ? buttonOptions.active : buttonOptions.noactive;
    classValue += " buttonClass"
    return (
      <div className={classValue} onClick={this.childHandleClick.bind(this)}>{this.props.name}</div>
    );
  }
}
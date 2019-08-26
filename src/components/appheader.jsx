import React from 'react';
import CustomButton from './button';



class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active:""
    };
  }

  componentDidMount() {
    var header = document.getElementsByClassName(this.props.customHeader)[0];
  }


  render() {
    return (
      <div className={this.props.customHeader}>
        <CustomButton name="Home" activeState="active"></CustomButton>
        <CustomButton name="News"></CustomButton>
        <CustomButton name="Contact"></CustomButton>
        <CustomButton name="About"></CustomButton>
      </div>
    );
  }
}

export default AppHeader;

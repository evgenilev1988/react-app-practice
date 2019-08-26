import React from 'react';
import CustomButton from './button';



class AppHeader extends React.Component {
  //constructor(props){
  //  super(props);
  //}

  render() {
    return (
      <div>
        {this.props.title}
        <CustomButton></CustomButton>
      </div>
    );
  }
} 

export default AppHeader;

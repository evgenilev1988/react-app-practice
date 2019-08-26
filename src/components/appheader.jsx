import React,{components} from 'react';
import CustomButton from './button';



class AppHeader extends React.Component {
  constructor(props){
    super(props);
    debugger;
  }

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

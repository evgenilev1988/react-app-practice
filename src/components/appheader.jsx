import React from 'react';
import CustomButton from './button';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.headerItems = this.props.headerProperties.header.map((element, index) => {
      return <CustomButton name={element.title} activeState={element.active} key={index} onBigButtonClick={this.clicked.bind(this)}></CustomButton>;
    });

    this.state = {
      menu: this.props.headerProperties.header
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  clicked(clickedName) {
    var menuItems = this.state.menu;

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].active = menuItems[i].title == clickedName;
    }

    this.setState({
      menu: menuItems
    });
  }

  drawMenu() {
    var menu = this.state.menu.map((element, index) => {
      return <CustomButton name={element.title} activeState={element.active} key={index} onBigButtonClick={this.clicked.bind(this)}></CustomButton>;
    });
    return menu;
  }

  render() {
    return (
      <div className={this.props.customHeader}>
        {this.drawMenu()}
      </div>
    );
  }
}

export default AppHeader;

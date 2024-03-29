import React from 'react';
import ReactDOM from 'react-dom';
import CustomButton from './button.js';
import HomeScreen from '../pages/home';
import NewsScreen from '../pages/news';
import ContactScreen from '../pages/contact';
import LoginScreen from '../pages/login';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: this.props.headerProperties.header,
      view: this.props.startingPage,
      userName: this.props.userName !== undefined && this.props.userName !== "" ? "Hello, " + this.props.userName : ""
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  clicked(clickedName) {
    var menuItems = this.state.menu;

    menuItems = menuItems.map((value)=>{
      value.active = value.title === clickedName;
      return value;
    });

    this.setState({
      menu: menuItems,
      view: this.state.menu.find(x => x.active).title
    });
  }

  drawView() {
    switch (this.state.view) {
      case "Home":
        return <HomeScreen title={this.state.view} />;
      case "News":
        return <NewsScreen title={this.state.view} />;
      case "Contact":
        return <ContactScreen title={this.state.view} />;
    }
  }


  drawMenu() {
    var menu = this.state.menu.map((element, index) => {
      return <CustomButton name={element.title} activeState={element.active} key={index} onAppClick={this.clicked.bind(this)}></CustomButton>;
    });
 
    return menu;
  }

  logout(){
    ReactDOM.render(<LoginScreen headerProperties={this.props.headerProperties}></LoginScreen>, document.getElementById('root'));
  }

  render() {
    return (
      <div>
        <div className={this.props.customHeader}>
          {this.drawMenu()}
          <div onClick={this.logout.bind(this)} className="logout">logout</div>
          <div>{this.state.userName}</div>
        </div>
        {this.drawView()}
      </div>
    );
  }
}


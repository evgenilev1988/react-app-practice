import { createStackNavigator } from 'react-navigation';
import Home from './pages/home.js';
import News from './pages/news.js';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  News: { screen: News }
});

export default AppNavigator;

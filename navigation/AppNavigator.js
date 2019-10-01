import {  createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from '@react-navigation/web'

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Screen2 from '../screens/Screen2';

import MainTabNavigator from './MainTabNavigator';

const AppNavigator = createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Home: HomeScreen,
    Screen2: WelcomeScreen,
    Screen3: Screen2,
  },{
    initialRouteName: 'Home',
  }
)
);

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
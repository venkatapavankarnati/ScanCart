import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Root} from 'native-base';
import {Scene,Router,Actions} from 'react-native-router-flux';

import HomePage from './Pages/HomePage';

export default class App extends Component
{
  render()
  {
    return(
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={HomePage} hideNavBar/>
          </Scene>
      </Router>
      </Root>
    );
  }
}
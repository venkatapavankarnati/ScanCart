import React, {Component} from 'react';
import {Text} from 'react-native';
import { View, Container } from 'native-base';
import Navbar from '../Component/Navbar';
export default class HomePage extends Component
{
  render()
  {
    return(
        <Container>
        <Navbar title="ScanCart"/>
        </Container> 
    );
  }
}
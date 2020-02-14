import React, {Component} from 'react';
import { View, Header, Left, Title, Right, Body } from 'native-base';

export default class Navbar extends Component
{
   
    render()
    {
        return(
            <Header>
                <Left/>
                <Body style={styles.body}>
                <Title style={styles.title}>{this.props.title}</Title>
                </Body>
                <Right/>
            </Header>
        );
    }
}
const styles={
    body: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontFamily: 'Roboto',
      fontWeight: '100'
    }
  };
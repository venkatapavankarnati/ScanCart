import React, {Component} from 'react';
import {Text} from 'react-native';
import { View, Container, Content } from 'native-base';
import Navbar from '../Component/Navbar';
import CategoriesView from '../Component/CategoriesView';
export default class HomePage extends Component
{
  render()
  {
    return(
        <Container>
        <Navbar title="ScanCart"/>
        <Content>{this.rendercontent()}</Content>
        </Container> 
    );
  }
  rendercontent(){
    let temp = [];
    for(var i=0;i<Categories.length;i++)
    {
      temp.push(<CategoriesView id={Categories[i].id} title={Categories[i].title} image={Categories[i].image}/>);
    }
    return temp;
  }
}

var Categories = [
  {
    id: 1,
    title: 'MEN',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_489/v1500284127/pexels-photo-497848_yenhuf.jpg'
  },
  {
    id: 2,
    title: 'WOMEN',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_460/v1500284237/pexels-photo-324030_wakzz4.jpg'
  },
  {
    id: 3,
    title: 'KIDS',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_445/v1500284286/child-childrens-baby-children-s_shcevh.jpg'
  },
  {
    id: 4,
    title: 'ACCESORIES',
    image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_467/v1500284346/pexels-photo-293229_qxnjtd.jpg'
  }
];

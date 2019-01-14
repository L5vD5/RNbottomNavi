import React, {Component} from 'react';
import { View, StyleSheet,Button} from 'react-native';
import BottomNavigation, {
    IconTab,
    Badge
} from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';
import Icon1Event from "./Scenes/Icon1Event";
import Icon2Event from "./Scenes/Icon2Event";
import Icon3Event from "./Scenes/Icon3Event";
import Icon4Event from "./Scenes/Icon4Event";
import Icon5Event from "./Scenes/Icon5Event"



import {createAppContainer,createBottomTabNavigator,createStackNavigator} from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const icons = [
  <Icon size={20} color="black" name={'add-box'} />,
  <Icon size={20} color="black" name={'add-circle'} />,
  <Icon size={20} color="black" name={'add'} />
]

let Navigator =  createMaterialBottomTabNavigator({
        Home: { screen: Icon1Event, navigationOptions:{tabBarColor:"#388E3C", tabBarIcon:icons[0]}},
        Order: { screen: Icon2Event, navigationOptions:{tabBarColor:"#01794C", tabBarIcon:icons[1]}},
        Bonus: { screen: Icon3Event, navigationOptions:{tabBarColor:"#6A1B9A", tabBarIcon:icons[2]}},
        MyPage: { screen: Icon4Event, navigationOptions:{tabBarColor:"#1565C0", tabBarIcon:icons[0]}},
        Settings: { screen: Icon5Event, navigationOptions:{tabBarColor:"#1C0", tabBarIcon:icons[1]}},
    }
);

let AppContainer = createAppContainer(Navigator);

export default AppContainer





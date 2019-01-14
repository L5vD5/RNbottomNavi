import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {createStackNavigator, createAppContainer} from "react-navigation";

import Login from "./authenticaion/Login.android"
import Signup from "./authenticaion/Signup.android"
import MainPage from "./MainPageNavigation"


let navigator = createStackNavigator({
        Login: { screen: Login},
        Signup: { screen: Signup },
        MainPage: { screen: MainPage},
    },
    {
        headerMode: 'none',
        transitionConfig: () => ({ screenInterpolator: () => null})
    });

let AppContainer = createAppContainer(navigator);

export default AppContainer

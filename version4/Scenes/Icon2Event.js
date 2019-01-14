import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

import Sub0 from "./Icon2Sub0"
import Sub1 from "./Icon2Sub1";
import Sub2 from "./Icon2Sub2";
import Sub3 from "./Icon2Sub3";

import {createStackNavigator, createAppContainer} from "react-navigation";

let headerOptions = {
  headerTitle: 'Order Page'
}

let navigator = createStackNavigator({
    Phase0: { screen: Sub0, navigationOptions: headerOptions },
    Phase1: { screen: Sub1, navigationOptions: headerOptions },
    Phase2: { screen: Sub2, navigationOptions: headerOptions },
    Phase3: { screen: Sub3, navigationOptions: headerOptions},
  },
  {
    transitionConfig: () => ({ screenInterpolator: () => null})
  }
  );

export default createAppContainer(navigator);
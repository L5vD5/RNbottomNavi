import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button
} from 'react-native';

import Sub1 from "./Icon2Sub1";
import Sub2 from "./Icon2Sub2";
import Sub3 from "./Icon2Sub3";

export default class Icon2Event extends Component {

  state = {
    activeScene: 0
  }

  Scene=[
    <Sub1 onNextPress={() => this.setState({activeScene: 1})}/>,
    <Sub2
      onPreviousPress={() => this.setState({activeScene: 0})}
      onNextPress={() => this.setState({activeScene: 2})}
      orderList={this.props.orderList}
    />,
    <Sub3
      onPreviousPress={() => this.setState({activeScene: 1})}
      onNextPress={() => this.setState({activeScene: 0})}
      orderList={this.props.orderList}
    />
  ]

  render()
  {
    return(
      <View>
        <Text style={{fontSize: 27}}>
          Order Page
        </Text>
        {this.Scene[this.state.activeScene]}
      </View>
    )
  }

}
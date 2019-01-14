import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button
} from 'react-native';

export default class Icon2Sub1 extends Component {
  render()
  {
    return(
      <View>
        <Text>예약하시겠습니까</Text>
        <Button title="next" onPress={()=>this.props.navigation.navigate("Phase1")}/>
      </View>
    )
  }
}
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

export default class Icon2Sub2 extends Component {
  state = {
    name: "",
    destination:""
  }

  _onSubmit=()=>{
    this.props.orderList.push({name: this.state.name, destination: this.state.destination})
    this.props.onNextPress()
  }
  render()
  {
    return (
      <ScrollView>
        <Text>수화물, 일정, 목적지 등록하기</Text>
        <TextInput
          placeholder='수화물 이름'
          clearTextOnFocus={true}
          onChangeText={(text) => this.setState({name:text})}
        />


        <TextInput
          placeholder='목적지'
          clearTextOnFocus={true}
          onChangeText={(text) => this.setState({destination:text})}
        />

        <Button title="next" onPress={this._onSubmit}/>
        <View style={{margin:7}} />
        <Button title="previous" onPress={this.props.onPreviousPress}/>
      </ScrollView>
    )
  }
}
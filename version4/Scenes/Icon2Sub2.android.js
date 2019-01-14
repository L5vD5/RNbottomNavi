import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
  DatePickerAndroid,
  TimePickerAndroid,
  TouchableOpacity
} from 'react-native';

export default class Icon2Sub2 extends Component {
  constructor(props){
    super(props);
    this.renderDatePicker.bind(this)
    this.renderTimePicker.bind(this);
  }
  state = {
    name: "",
    sendDate:new Date(),
    receiveDate:new Date(),
    sendTime:new Date(),
    receiveTime:new Date()
  }

  _onSubmit=()=>{
    //this.props.orderList.push({name: this.state.name, destination: this.state.destination})
    this.props.navigation.navigate("Phase3")
  }

  async renderDatePicker(isSend){ //날짜 선택. isSend(bool)값 기준으로 맡길/찾을 판단
      try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          let date = new Date(year, month, day);
          if(isSend)
            this.setState({sendDate: date});
          else
            this.setState({receiveDate: date});
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
    }

  async renderTimePicker(isSend){ //시간 선택. isSend(bool)값 기준으로 맡길/찾을 판단
      try {
        const {action, hour, minute} = await TimePickerAndroid.open({
          is24Hour: false, // Will display '2 PM'
        });
        if (action !== TimePickerAndroid.dismissedAction) {
          let date=new Date(0,0,0,hour,minute);
          if(isSend)
            this.setState({sendTime: date});
          else
            this.setState({receiveTime: date});
        }
      } catch ({code, message}) {
        console.warn('Cannot open time picker', message);
      }
    }

    render()
    {
      return (
        <ScrollView>

          <Text>수화물, 일정, 목적지 등록하기</Text>
          <View style={{margin:7}} />
          <Text>맡길 날짜/시간</Text>
          <TouchableOpacity
            onPress={()=>this.renderDatePicker(true)}
          >
            <Text> {this.state.sendDate.toDateString()} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.renderTimePicker(true)}
          >
            <Text> {this.state.sendTime.toLocaleTimeString()} </Text>
          </TouchableOpacity>
          <View style={{margin:7}} />
          <Text>찾을 날짜/시간</Text>
          <TouchableOpacity
            onPress={()=>this.renderDatePicker(false)}
          >
            <Text> {this.state.receiveDate.toDateString()} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.renderTimePicker(false)}
          >
            <Text> {this.state.receiveTime.toLocaleTimeString()} </Text>
          </TouchableOpacity>
          <View style={{margin:7}} />
          <Button title="다음" onPress={this._onSubmit}/>
          <View style={{margin:7}} />
          <Button title="previous" onPress={()=>this.props.navigation.goBack()}/>
        </ScrollView>
        )
    }
}
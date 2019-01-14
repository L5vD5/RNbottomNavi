import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  CheckBox
} from 'react-native';

export default class Icon2Sub1 extends Component {
  state = {
    selectedStart:false,
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false,
    count:0,
    start:"",
    destination:""
  };

  _title=()=>{
    if(this.state.count>0)
      return(<Text style={{textAlign:'center'}}>짐 맡길 장소를 선택해주십시오</Text>)
    return(<Text style={{textAlign:'center'}}>짐 찾을 장소를 선택해주십시오</Text>)
  };

  _onSelect=(checkbox,location)=>{ //확인할 체크박스(체크박스 값은 터치로 바뀌기 전 값이 들어감), 장소
    if(!checkbox)
    {
      if(this.state.start=="") //출발역 정해져있지 않으면
        this.setState({start: location});
      else
        this.setState({destination: location});
      this.setState({count: this.state.count+1});
    }
    else
    {
      if(this.state.start!="") //출발역 정해져있지 않으면
        this.setState({start: ""});
      else
        this.setState({destination: ""});
      this.setState({count: this.state.count-1});
    }
  };

  _onCancel = () => { //처음부터 다시 고를 때
      this.setState({checkbox1: false});
      this.setState({checkbox2: false});
      this.setState({checkbox3: false});
      this.setState({checkbox4: false});
      this.setState({count:0});
      this.setState({start: ""});
      this.setState({destination: ""})
    };
    render()
    {
      return(
        <View>
          {this._title()}
          <View style={{flexDirection: 'row'}}>
            <View style={{margin:7}} />
            <View style={{flex:1}}>
              <Text>서울역</Text>
              <CheckBox
                value={this.state.checkbox1}
                onValueChange={() => this.setState({checkbox1 : !this.state.checkbox1})}
                onChange={()=>this._onSelect(this.state.checkbox1,"서울역")}
                disabled={this.state.count>1}
              />
            </View>
            <View style={{margin:7}} />
            <View style={{flex:1}}>
              <Text>제휴호텔</Text>
              <CheckBox
                value={this.state.checkbox2}
                onValueChange={() => this.setState({checkbox2 : !this.state.checkbox2})}
                onChange={()=>this._onSelect(this.state.checkbox2,"제휴호텔")}
                disabled={this.state.count>1}
              />
            </View>
            <View style={{margin:7}} />
          </View>
          <View style={{margin:7}} />
          <View style={{flexDirection: 'row'}}>
            <View style={{margin:7}} />
            <View style={{flex:1}}>
              <Text>인천공항</Text>
              <CheckBox
                value={this.state.checkbox3}
                onValueChange={() => this.setState({checkbox3 : !this.state.checkbox3})}
                onChange={()=>this._onSelect(this.state.checkbox2,"인천공항")}
                disabled={this.state.count>1}
              />
            </View>
            <View style={{margin:7}} />
            <View style={{flex:1}}>
              <Text>김포공항</Text>
              <CheckBox
                value={this.state.checkbox4}
                onValueChange={() => this.setState({checkbox4 : !this.state.checkbox4})}
                onChange={()=>this._onSelect(this.state.checkbox2,"김포공항")}
                disabled={this.state.count>1}
              />
            </View>
            <View style={{margin:7}} />
          </View>
          <View style={{margin:7}} />
          <View style={{margin:7}} />
          <Button title="다시 고르기" onPress={this._onCancel} disabled={this.state.count==0}/>
          <Button title="다음" onPress={()=>this.props.navigation.navigate("Phase2")} disabled={this.state.count<2}/>
        </View>
      )
    }
}
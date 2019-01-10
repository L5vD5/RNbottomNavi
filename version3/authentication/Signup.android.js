import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    CheckBox,
    Alert
} from 'react-native';

export default class Signup extends Component {
    constructor(props)
    {
        super(props)
        this._onJoin = this._onJoin.bind(this)
    }
    state = {
        agree: false,
        id: "",
        password:"",
        passwordRepeat:""
    }
    _onJoin(){
        let inputed = false
        let samePass = false
        if(this.state.id!=""&&this.state.password!="")
            inputed=true
        else
            Alert.alert("아이디/비밀번호를 정해주십시오")
        if(this.state.password==this.state.passwordRepeat)
            samePass = true
        else
            Alert.alert("비밀번호가 일치하지 않습니다.")
        if(inputed && samePass) {
					fetch('http://l5vd5.asuscomm.com:3100/auth/local/register', {
						method: 'POST',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							"email": this.state.id,
							"password": this.state.password,
						}),
					})
            .then((response) => {
              this.props.onExitPress()
            })
        }

    }

    render(){
        return(<ScrollView style={{padding: 20}}>
            <Text
                style={{fontSize: 27}}>
                Create New Account
            </Text>
            <ScrollView style={{padding: 10}}>
                <Text
                    style={{fontSize: 20}}>
                    {`아래의 회원가입 규정에 동의하십니까?\nBlahBlahBlahBlahBlahBlah BlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlah
                `}
                </Text>
            </ScrollView>
            <CheckBox
                value={this.state.checked}
                onValueChange={() => this.setState({checked: !this.state.checked})}
                onChange={() => this.setState({agree: !this.state.agree})}
            />
            <TextInput
                placeholder='Username'
                clearTextOnFocus={true}
                onChangeText={(text) => this.setState({id:text})}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                clearTextOnFocus={true}
                onChangeText={(text) => this.setState({password:text})}
            />
            <TextInput
                placeholder='Repeat Password'
                secureTextEntry={true}
                clearTextOnFocus={true}
                onChangeText={(text) => this.setState({passwordRepeat:text})}
            />
            <View style={{margin:7}} />
            <Button
                onPress={this._onJoin}
                disabled={!this.state.agree}
                title="join"
            />
            <View style={{margin:7}} />
            <Button
                onPress={this.props.onExitPress}
                title="go back"
            />
        </ScrollView>)
    }
}

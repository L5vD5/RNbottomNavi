import React, { Component } from 'react';
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Login extends Component {

    constructor(props){
        super(props)
    }
    state = {
        id: "",
        password:""
    }

    _onLoginAttempt= () => {
        let inputed = false
        if(this.state.id!=""&&this.state.password!="")
            inputed=true
        else
            Alert.alert("아이디/비밀번호를 입력해주십시오")
        if(inputed) {
					fetch('http://l5vd5.asuscomm.com:3100/auth/local/', {
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
              if(response.status==200)
                this.props.onLoginPress()
              else if(response.status==401)
                Alert.alert("아이디/비밀번호를 확인하세요")
            })
        }
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Login
                </Text>
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
                <View style={{margin:7}} />
                <Button
                    onPress={this._onLoginAttempt}
                    title="Submit"
                />
                <View style={{margin:7}} />
                <Button
                    onPress={this.props.onSignupPress}
                    title="Sign up"
                />
            </ScrollView>
        )
    }
}

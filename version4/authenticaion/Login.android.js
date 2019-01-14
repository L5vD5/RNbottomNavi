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
        if(inputed)
            this.props.navigation.navigate("MainPage")
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
                    onPress={()=>this.props.navigation.navigate("Signup")}
                    title="Sign up"
                />
            </ScrollView>
        )
    }
}
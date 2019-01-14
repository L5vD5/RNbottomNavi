import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Icon5Event extends Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Settings
                </Text>
                <View style={{margin:20}} />
                <Button
                    onPress={()=>this.props.navigation.dangerouslyGetParent().navigate("Login")}
                    title="Logout"
                />
            </ScrollView>
        )
    }
}
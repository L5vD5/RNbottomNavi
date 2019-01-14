import {Button, View, Text,Image} from "react-native";
import React from "react";

function Icon1Event() {
    return(
        <View>
            <Image source={require('../../DropLogo.png')}/>
            <Text
                style={{fontSize: 27}}>
                Home
            </Text>
            <Text
                style={{fontSize: 27}}>
                배송 상태
            </Text>
        </View>
    )
}

export default Icon1Event;
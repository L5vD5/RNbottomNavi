import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

import {mockOrderList} from "../data/Mocks";
import Order from "../data/Order"

export default class Icon4Event extends Component {

    _showList=() =>{
      return mockOrderList.listReview()
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    MyPage
                </Text>
                <Text
                    style={{fontSize: 27}}>
                    회원 정보
                </Text>
                <Text
                    style={{fontSize: 27}}>
                    주문 내역
                </Text>
                {this._showList()}
                <View style={{margin:20}} />
            </ScrollView>
        )
    }
}


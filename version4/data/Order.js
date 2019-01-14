import {Text, View} from "react-native";
import React from "react";

class Order {
  constructor(name, destination) {
    this.name = name;
    this.destination=destination
  }
  orderReview(){
    return(
      <View style={{backgroundColor: '#F5F'}}>
        <Text>name:{this.name}</Text>
        <Text>destination: {this.destination}</Text>
      </View>
    )
  }
  setFromObject(ob){
    this.name = ob.name;
    this.destination = ob.destination;
  }

  static fromObject(ob) {
    let o = new Order(ob.name,ob.destination);
    o.setFromObject(ob);
    return c;
  }
}

export default Order
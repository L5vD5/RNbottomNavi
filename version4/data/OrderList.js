import {Text, View} from "react-native";
import React from "react";

class OrderList {
  constructor(name) {
    this.name=name
    this.orders=[]
  }
  addOrder(order) {
    this.orders = this.orders.concat(order);
  }
  listReview(){
    return this.orders.map(function(order, i){
      return(
        <View key={i} >
          {order.orderReview()}
          <View style={{margin:7}} />
        </View>
      );
    });
  }
  setFromObject(ob){
    this.name = ob.name;
    this.orders = ob.orders;
  }

  static fromObject(ob) {
    let o = new OrderList(ob.name);
    o.setFromObject(ob);
    return o;
  }
}

export default OrderList
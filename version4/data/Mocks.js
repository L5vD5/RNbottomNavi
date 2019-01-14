import Order from './Order'
import OrderList from './OrderList'

let mockOrderList = new OrderList("MockList")

mockOrderList.addOrder( new Order("MockN1","MockD1"))
mockOrderList.addOrder( new Order("MockN2","MockD2"))
mockOrderList.addOrder( new Order("MockN3","MockD3"))

export {mockOrderList}
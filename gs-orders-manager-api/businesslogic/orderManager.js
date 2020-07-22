
const orderRepository = require('../persistence/orderRepository');
const itemRepository = require('../persistence/itemRepository');


let orderManager = {


    getOrders : (localName, callBack) => {
  
        orderRepository.getOrders(localName,tableName, order => {


            

            tableRepository.getTables(localIds, tables => {

                let roomIdIndexMap = [];

 
                tables.forEach(table => {
 
                    if(roomIdIndexMap[table.room_id]){

                        roomIdIndexMap[table.room_id].tables.push(table);

                    }else{
                    
                        for(i = 0; i <= rooms.length; i++){

                            if(table.room_id === rooms[i].id){

                                roomIdIndexMap[table.room_id] = rooms[i];
                                roomIdIndexMap[table.room_id].tables = [table];
                                break;

                            }
                        
                        }
                    }                        

                });

                callBack(rooms);
            });
                        
        });    
    
    },


    createOrder : (order,callBack) => {

        orderRepository.createOrder(order, result => {

            order.id = result.insertId;

            order.orderItems.forEach(orderItem => {

                orderItem.orderId = order.id;
                
                orderRepository.createOrderItem(orderItem, result => {

                    orderItem.id = result.insertId;
                    

                    let itemLocation = {
                        itemId      : orderItem.itemId,
                        locationId  : order.locationId,
                        quantity    : orderItem.quantity  
                    }

                    itemRepository.getItemsAndQuantities(
                        itemLocation.itemId, 
                        itemLocation.locationId,
                        
                        result =>{

                            if(result.length > 0){

    
                                if (result[0].quantity != null && result[0].quantity >= itemLocation.quantity){
                                    
                                    itemLocation.quantity -= result[0].quantity; 
                                    
                                    itemRepository.updateItemLocation(
                                        itemLocation
                                        ,
                    
                                        (result) =>{
                                            console.log("********");
                                            console.log(result);
                                            console.log(result.affectedRows);
                
                                        }
                                    )
        

                                }else{
                                    
                                    console.log("+++++++++");
                                    console.log(result);

                                }
                                
                            }    


                        }
                    )

                });

            });

            callBack(result);
        });    
       
    }

}

module.exports = orderManager;
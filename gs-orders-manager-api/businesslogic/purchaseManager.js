
const purchaseRepository = require('../persistence/purchaseRepository');
const purchaseOrderRepository = require('../persistence/purchaseOrderRepository');
const itemRepository = require('../persistence/itemRepository');


let purchaseManager = {

    createPurchase : (purchase,callBack) => {

        if (!purchase.purchaseDate){
            purchase.purchaseDate = new Date();
        }

        purchase.total = 0;

        purchase.purchaseItems.forEach(purchaseItem => {

            if(isNaN (purchaseItem.purchasePrice)){
                purchaseItem.purchasePrice = 0;
            } 

            if(isNaN (purchaseItem.quantity)){
                purchaseItem.quantity = 0;
            } 

            purchase.total += purchaseItem.purchasePrice;
        })

        purchaseRepository.createPurchase(purchase, result => {

            purchase.id = result.insertId;

            purchase.purchaseItems.forEach(purchaseItem => {

                purchaseItem.purchaseId = purchase.id;
                
                purchaseRepository.createPurchaseItem(purchaseItem, result => {

                    purchaseItem.id = result.insertId;
                    

                    let itemLocation = {
                        itemId      : purchaseItem.itemId,
                        locationId  : purchase.locationId,
                        quantity    : purchaseItem.quantity  
                    }

                    itemRepository.getItemsAndQuantities(
                        itemLocation.itemId, 
                        itemLocation.locationId,
                        result =>{

                        if(result.length > 0){

                            console.log("yyyyy");
                            console.log(result);
                            


                            if (result[0].quantity != null){
                                
                                itemLocation.quantity += result[0].quantity; 
                                
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

                                itemRepository.createItemLocation(
                                    itemLocation,
                                    (result) =>{

                                        console.log("+++++++++");
                                        console.log(result);

                                    }
                                );

                            }
                            
                        }    





                        }
                    )

                });

            });

            callBack(result);
        });    
       
    },


    createPurchaseOrder : (purchaseOrder,callBack) => {

        purchaseOrderRepository.createPurchaseOrder(purchaseOrder, result => {

            purchaseOrder.id = result.insertId;

            purchaseOrder.purchaseOrderItems.forEach(purchaseOrderItem => {

                purchaseOrderItem.purchaseOrderId = purchaseOrder.id;
                
                purchaseOrderRepository.createPurchaseOrderItem(purchaseOrderItem, result => {

                    purchaseOrderItem.id = result.insertId;

                });

            });

            callBack(result);
        });    
       
    }
}

module.exports = purchaseManager;
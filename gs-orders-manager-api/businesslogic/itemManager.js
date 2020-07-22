
const purchaseRepository = require('../persistence/itemRepository');

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
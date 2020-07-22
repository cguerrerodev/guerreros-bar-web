const dbConnection = require('./dbconnection');

let purchaseOrderRepository = {

    createPurchaseOrder : (purchaseOrder,callBack) => {

        let sql = "INSERT INTO gsb_purchase_order (user_id, location_id, created, comment) values (?,?,?,?)";
        
        dbConnection.query(sql, [purchaseOrder.userId, purchaseOrder.locationId, new Date(), purchaseOrder.comment], 
            (error, results) => {
                if (error) {
                    console.error(error.message);
                }else{
                    callBack(results);
                }
            }
        );

    },

    createPurchaseOrderItem : (purchaseOrderItem,callBack) => {

        let sql = "INSERT INTO gsb_purchase_order_item (purchase_order_id, item_id, quantity) values (?,?,?)";
        
        dbConnection.query(sql, [purchaseOrderItem.purchaseOrderId, purchaseOrderItem.itemId, purchaseOrderItem.quantity], 
            (error, results) => {
                if (error) {
                    console.error(error.message);
                }else{
                    callBack(results);
                }
            }
        );

    }    
}

module.exports = purchaseOrderRepository;
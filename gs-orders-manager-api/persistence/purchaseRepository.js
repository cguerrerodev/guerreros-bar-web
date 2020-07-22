const dbConnection = require('./dbconnection');

let purchaseRepository = {

    createPurchase : (purchase,callBack) => {

        let sql = 
            "INSERT INTO gsb_purchase (user_id, location_id, purchase_order_id, purchase_date, created, total, comment) values (?,?,?,?,?,?,?)";
        
        dbConnection.query(sql, 
            [
                purchase.userId, 
                purchase.locationId, 
                purchase.purchaseOrderId,
                purchase.purchaseDate, 
                new Date(), 
                purchase.total,
                purchase.comment
            ], 

            (error, results) => {
                if (error) {
                    console.error(error.message);
                }else{
                    callBack(results);
                }
            }
        );

    },

    createPurchaseItem : (purchaseItem,callBack) => {

        let sql = "INSERT INTO gsb_purchase_item (purchase_id, item_id, quantity, purchase_price) values (?,?,?,?)";
        
        dbConnection.query(sql, 
            [
                purchaseItem.purchaseId, 
                purchaseItem.itemId, 
                purchaseItem.quantity, 
                purchaseItem.purchasePrice
            ], 
            
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

module.exports = purchaseRepository;
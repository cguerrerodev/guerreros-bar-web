const dbConnection = require('./dbconnection');

let orderRepository = {


    getOrdersByLocalName : (localName, callBack) => {

        let sql = `SELECT a.* FROM gsb_order a left outer join gsb_local b on (a.local_id = b.id)`;
        let params = [];

        if(localId){
            sql += ' where b.name = ?'; 
            params.push(localId);
        }
        
        dbConnection.query(sql, params, (error, results) => {
            if (error) {
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },

    getOrdersByTableName : (tableName, callBack) => {

        let sql = `SELECT * FROM gsb_order`;
        let params = [];

        if(localId){
            sql += ' where local_id = ?'; 
            params.push(localId);
        }
        
        dbConnection.query(sql, params, (error, results, fields) => {
            if (error) {
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },


    getOrderItem : (orderId, callBack) => {

        let sql = `SELECT * FROM gsb_order_item`;
        let params = [];

        if(localId){
            sql += ' where order_id = ?'; 
            params.push(orderId);
        }
        
        dbConnection.query(sql, params, (error, results, fields) => {
            if (error) {
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },    


    createOrder : (order,callBack) => {

        let sql = 
            "INSERT INTO gsb_order (user_id, table_id, created) values (?,?,?)";
        
        dbConnection.query(sql, 
            [
                order.user_id, 
                order.table_id, 
                new Date(), 

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

    createOrderItem : (orderItem,callBack) => {

        let sql = "INSERT INTO gsb_order_item (order_id, item_id, quantity) values (?,?,?)";
        
        dbConnection.query(sql, 
            [
                orderItem.orderId, 
                orderItem.itemId, 
                orderItem.quantity, 
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

module.exports = orderRepository;
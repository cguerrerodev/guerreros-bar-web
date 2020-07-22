
const dbConnection = require('./dbconnection');

let itemRepository = {

    getItems : (callBack) => {

        let sql = `SELECT * FROM gsb_item`;
        
        dbConnection.query(sql, (error, results, fields) => {
            if (error) {
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },

    getItemsAndQuantities : ( itemId, locationId, callBack) => {

        let sql = 'select a.*, sum(b.quantity) as quantity ' + 
        'from gsb_item a left outer join gsb_item_location b on a.id = b.item_id ';
        
        let params = [];

        if (locationId){
            sql += 'and b.location_id = ? ';
            params.push(locationId);
        }

        if (itemId){
            sql += 'where a.id = ? '
            params.push(itemId);;
        }
         
        sql += 'group by a.id';
        
        console.log(sql);

        dbConnection.query(sql, params,(error, results, fields) => {
            if (error) {
                console.log(error);
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },

    getQuantity : (itemId, callBack) => {

        let sql = `SELECT quantity FROM gsb_item_location where gsb_item_id = ?`;
        
        dbConnection.query(sql,[itemId], (error, results) => {
            if (error) {
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },    


    createItemLocation : (itemLocation,callBack) => {

        let sql = "INSERT INTO gsb_item_location (item_id, location_id, quantity) values (?,?,?)";
        
        dbConnection.query(sql, 
            [
                itemLocation.itemId, 
                itemLocation.locationId,
                itemLocation.quantity
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

    updateItemLocation : (itemLocation,callBack) => {

        let sql = "update gsb_item_location set quantity = ? " + 
        "where item_id = ? and location_id = ?";
        
        dbConnection.query(sql, 
            [
                itemLocation.quantity,
                itemLocation.itemId,
                itemLocation.locationId

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

module.exports = itemRepository;
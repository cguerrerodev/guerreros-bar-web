
const dbConnection = require('./dbconnection');

let roomRepository = {

    getTables : (roomId, callBack) => {

        let sql = `SELECT * FROM gsb_table`;
        let params = [];

        if(roomId){
            sql += ' where room_id = ?'; 
            params.push(roomId);
        }
        
        dbConnection.query(sql, params, (error, results, fields) => {
            if (error) {
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },

    getTableByRoomIds : (roomIds, callBack) => {

        let sql = 'SELECT * FROM gsb_table where room_id in (';
        let params = [];

        roomIds.forEach((element,i) => {
            i == roomIds.length - 1 ? sql += '?' : '?,';
            params.push(element); 
        });
    
        sql += ')';         
        
        dbConnection.query(sql, params, (error, results, fields) => {
            if (error) {
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },

}

module.exports = roomRepository;

const dbConnection = require('./dbconnection');

let roomRepository = {

    getRooms : (localId, callBack) => {

        let sql = `SELECT * FROM gsb_room`;
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

}

module.exports = roomRepository;
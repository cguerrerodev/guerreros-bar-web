
const dbConnection = require('./dbconnection');

let roomRepository = {

    getRooms : (localName, callBack) => {

        let sql = "SELECT a.* FROM gsb_room a";
        sql += " left outer join gsb_local b";
        sql += " on (a.local_id = b.id)"
        sql += " where b.name = ?"; 
        
        dbConnection.query(sql, localName, (error, results, fields) => {
            if (error) {
                console.error(error.message);
            }else{
                callBack(results);
            }
        });

    },

}

module.exports = roomRepository;
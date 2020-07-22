
const roomRepository = require('../persistence/roomRepository');
const tableRepository = require('../persistence/tableRepository');

let localManager = {
    
    getRooms : (localName, callBack) => {
  
        roomRepository.getRooms(localName, rooms => {
            
            let localIds = [];

            rooms.forEach(room => {
                localIds.push(room.id);
            });

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
    
    }


}

module.exports = localManager;
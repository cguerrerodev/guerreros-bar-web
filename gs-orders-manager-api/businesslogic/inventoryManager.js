
const itemRepository = require('../persistence/itemRepository');

let inventoryManager = {

    
    getInventory : ( itemId, locationId, callBack) => {
        
        itemRepository.getItemsAndQuantities( itemId, locationId, results => {

            let inventory = {};

            if (itemId){
                inventory.itemId = itemId;
            }
            if (locationId){
                inventory.locationId = locationId;
            }

            inventory.items = results;
            callBack(inventory);
            
        });    
    
    }


}

module.exports = inventoryManager;
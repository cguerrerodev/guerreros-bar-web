
const initState= {}

const inventoryReducer = (state = initState, action) => {

    switch (action.type){

        case 'GET_INVENTORY':
             
            return{
                ...state,
                inventory:action.payload
            }
        
        default:

            return state;
    }

};

export default inventoryReducer;

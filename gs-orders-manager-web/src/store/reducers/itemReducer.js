
const initState= {}

const itemReducer = (state = initState, action) => {

    switch (action.type){

        case 'GET_ITEMS':
             
            return{
                ...state,
                items:action.payload
            }
        
        default:

            return state;
    }

};

export default itemReducer;

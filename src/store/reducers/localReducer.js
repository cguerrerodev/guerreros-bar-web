
const initState= {}

const localReducer = (state = initState, action) => {

    switch (action.type){

        case 'GET_ROOMS':
             
            return{
                ...state,
                rooms:action.payload
            }
        
        default:

            return state;
    }

};

export default localReducer;

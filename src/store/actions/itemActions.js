
import axios from 'axios';

export function fetchItems(){

    return (dispatch)=>{

        return axios.get
        ('http://localhost:3001/api/items', {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            }
          }
        )
    
        .then(response => 
            dispatch(
            {   
                type : 'GET_ITEMS',
                payload : response.data   
            }
            )
        )
    }

}


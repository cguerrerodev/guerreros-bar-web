
import axios from 'axios';

export function fetchInventory(){

    return (dispatch)=>{

        return axios.get
        ('http://localhost:3001/api/inventory', {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            }
          }
        )
    
        .then(response => 
            dispatch(
            {   
                type : 'GET_INVENTORY',
                payload : response.data   
            }
            )
        )
    }

}


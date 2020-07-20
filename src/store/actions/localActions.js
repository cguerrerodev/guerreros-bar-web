
import axios from 'axios';

export function fetchRooms(localName){

    return (dispatch)=>{

        return axios.get
        ('http://localhost:3001/api/locals/' + localName + '/rooms', {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            }
          }
        )
    
        .then(response => {

            dispatch(
            {   
                type : 'GET_ROOMS',
                payload : response.data   
            })

        })
    }

}


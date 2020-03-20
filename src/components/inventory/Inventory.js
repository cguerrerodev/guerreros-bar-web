
import React, { Component } from 'react'
import axios from 'axios'

class Inventory extends Component {

    state = {
        items : []
    }

    componentDidMount(){
        let items = [];

        axios
        ('http://localhost:3001/api/items', {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            }
          })

        .then(response => {
            // handle success
            response.data.forEach(item => {
                items.push(item);
            })

            this.setState({items});
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
            
          });

          
    }



    render(){

        let rows = [];
        
        this.state.items.forEach((item, i) => {
            rows.push(
                <tr key = {i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.created}</td>
                    <td></td>
                    <td>{item.mesurementUnitId}</td>
                </tr>
            )
        });
        
        return (

            <div className="card">
                
                <div className="card-header">Inventory</div>

                <div className="card-body">

                    {rows.length !== 0 ?

                        <div className = "table-responsive">
                            <table className = "table table-striped table-hover">
                                <thead >
                                    <tr>
                                        <th>Id</th>
                                        <th>name</th>
                                        <th>Created</th>
                                        <th>Total unit</th>
                                        <th>Mesurement unit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows}
                                </tbody>
                            </table>
                        </div>

                        
                    :
                        
                            <div>
                                No items in the inventory
                            </div>
                        
                    }
                </div>

            </div>

        );

    }

}

export default Inventory;
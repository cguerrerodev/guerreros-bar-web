
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchInventory} from '../../store/actions/inventoryActions'



class Inventory extends Component {
    
    componentDidMount(){

        this.props.fetchInventory();
          
    }

    render(){
       

        let rows = [];
        
        if (this.props.inventory.inventory 
            && this.props.inventory.inventory.items){

            this.props.inventory.inventory.items.forEach((item, i) => {
                rows.push(
                    <tr key = {i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.created}</td>
                        <td>{item.quantity}</td>
                        <td>{item.mesurementUnitId}</td>
                    </tr>
                )
            });
        }


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


const mapStateToProps = (state) => {
    return {inventory : state.inventory}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInventory: () => dispatch(fetchInventory())
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
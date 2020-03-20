
import React, { Component } from 'react'

class PurchaseOrderList extends Component {

    state = {
        purchaseOrderList:[]
    }

    render(){

        return (
            this.purchaseOrderList.length != 0 ?
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Created</th>
                                <th>Created by</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{this.state.purchaseOrder.id}</td>
                            <td>{this.state.purchaseOrder.created}</td>
                            <td>{this.state.purchaseOrder.createdBy}</td>
                            <td>{this.state.purchaseOrder.location.name}</td>
                        </tr>

                        </tbody>
                    </table>

                </div>

            :
                <div>
                    No purchase order saved
                </div>    

        );

    }

}

export default PurchaseOrderList;
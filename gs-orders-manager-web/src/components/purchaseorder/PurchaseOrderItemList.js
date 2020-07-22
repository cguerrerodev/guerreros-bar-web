
import React, { Component } from 'react'

class PurchaseOrderItemList extends Component {

    state = {
        purchaseOrderItemList:[]
    }

    render(){

        return (
            this.state.purchaseOrderItemList.length !== 0 ?
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>{this.state.purchaseOrderItem.name}</td>
                            <td>{this.state.purchaseOrderItem.quantity}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            :
                <div>
                    No purchase order item added
                </div>    

        );

    }

}

export default PurchaseOrderItemList;

import React, { Component } from 'react';
import PurchaseOrderItemList from './PurchaseOrderItemList';
import ItemSelect from './ItemSelect';

class PurchaseOrder extends Component {

    state = {
        purchaseOrder:{
            created : '',
            user : {
                name:'' 
            },
            location: {
                name: ''
            },
            comment: ''
        }
    }

    render(){

        return (
            <div>
                
                <div>
                    <h1>Purchase Order</h1>
                    <label>Date:</label>
                    <font>{this.state.purchaseOrder.created}</font>
                    <label>User:</label>
                    <font>{this.state.purchaseOrder.user.name}</font>
                    <label>Location:</label>
                    <font>{this.state.purchaseOrder.location.name}</font>
                    <label>Comment:</label>
                    <textarea readOnly="true" value = {this.state.purchaseOrder.comment}></textarea>
                </div>

                <PurchaseOrderItemList />
                
                <div>
                    <button id = "addPurchaseOrderItemButton" >Add item</button>
                </div>                    

                <div id =  "addPurchaseOrderItemDiv">
                    <ItemSelect />
                </div>
            </div>
        );

    }

}

export default PurchaseOrder;
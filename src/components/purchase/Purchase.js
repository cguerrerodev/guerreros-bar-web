
import React, { Component } from 'react';
import PurchaseItemList from './PurchaseItemList';
import ItemSelect from '../item/ItemSelect';
import axios from 'axios';

class Purchase extends Component {

    state = {
    
        created : '',
        user : {
            name:'' 
        },
        location: {
            name: ''
        },
        comment: '',

        items : [],
        
        modalAddItemVisible : false
    }

    addItem = (item) => {
        let items = [...this.state.items, item]
        this.setState({items});
    }

    showAddItemModal = () => {
        this.setState({modalAddItemVisible : true});
        console.log(this.state.modalAddItemVisible);
    }

    closeAddItemModal = () => this.setState({modalAddItemVisible : false})

    save = () => {

        let purchaseItems = [];

        this.state.items.forEach(purchaseItem => {
            
                purchaseItems.push(
                    {
                        itemId : purchaseItem.item.id,
                        quantity : purchaseItem.quantity,
                        purchasePrice : purchaseItem.item.price
                    }
                )
            }
        )

        axios
        ('http://localhost:3001/api/purchase', {
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
            },
            data: {
                userId : 1,
                locationId : 1,
                purchaseOrderId : this.state.purchaseOrderId,
                purchaseDate : this.state.purchaseDate,
                comment : this.state.comment,
                purchaseItems : purchaseItems
            }
        })

        .then(response => {
            // handle success
            console.log(response);
            alert("Purchase saved!");
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

        return (

            <div className="card">
                
                <div className="card-header">Purchase</div>

                <div className="card-body">                   

                    <div className="form-group" >
                        <label>User:</label>
                        <p className="form-control" >{this.state.user.name}</p>
                    </div>

                    <div className="form-group" >
                        <label>Location:</label>
                        <select id = "location" value = {this.state.location.id} className="form-control" >
                            <option key = {this.state.location.id} value = {this.state.location.id}>
                                {this.state.location.name}
                            </option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Date:</label>
                        <p className="form-control">{this.state.created}</p>
                    </div>
                                
                    <div className="card border-secondary">
                        <div className="card-body">
                            <PurchaseItemList items = {this.state.items}/>
                        </div>
                        <div className="btn-group float-right">
                            <button id = "addPurchaseItemButton" onClick = {this.showAddItemModal} className="btn btn-secondary" >Add item</button>
                            <button id = "removePurchaseItemButton" className="btn btn-secondary" >Remove item</button>               
                        </div>       
                    </div>    

                    <div className="form-group">
                        <label>Comment:</label>
                        <textarea defaultValue = {this.state.comment} className="form-control" />
                    </div>
                    
                </div>

                <div className="btn-group float-right" >
                        <button id = "acceptButton" className="btn btn-primary" onClick = {this.save} >Accept</button>
                        <button id = "cancelButton" className="btn btn-primary"  >Cancel</button>
                </div>

                <ItemSelect addItemFunction = {this.addItem} 
                    show={this.state.modalAddItemVisible} onHide={this.closeAddItemModal} 
                    />

            </div>
        );

    }

}

export default Purchase;
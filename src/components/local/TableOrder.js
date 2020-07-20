import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Order from '../sell/Order';
import AddItemForm from '../item/AddItemForm';

class TableMenu extends Component {

    state = {

        items:[]
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



    render(){

        return (

            <div>
                <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.props.show} onHide={this.props.onHide} 
                
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    {this.props.table.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <AddItemForm addItemFunction = {this.addItem}    />    
                    <br />
                    <div className="card border-secondary">
                        <div className="card-body">
                            <Order items = {this.state.items} />
                        </div>
                    </div>
                    <br />
                    <div className="btn-group float-right">
                        <button id = "addPurchaseItemButton" onClick = {this.showAddItemModal} className="btn btn-secondary" >Add item</button>
                        <button id = "removePurchaseItemButton" className="btn btn-secondary" >Remove item</button>               
                    </div>           
                </Modal.Body>
                <Modal.Footer>

                    <button id = "cancelButton" className="btn btn-primary"  >Close</button>
                                        
                </Modal.Footer>
                </Modal>

                
            </div>
        )
    }

}

export default TableMenu;
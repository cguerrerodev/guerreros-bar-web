
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddItemForm from './AddItemForm'

class AddItemModalDialog extends Component {

    state = {
        itemId : null,
        quantity: 0,
        items : [],
        purchaseItems: this.props.purchaseItems
    }

    handleChange = (event) => {

        this.setState({
            [event.target.id] : event.target.value
        });
    } 

 
    render(){

        let options = [];

        if (this.props.items){

            this.props.items.forEach(item => {

                options.push(<option key = {item.id} value = {item.id}>{item.name}</option>);
                
            })

        }


        return (

            <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.show} onHide={this.props.onHide} 
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <AddItemForm addItemFunction = {this.props.addItemFunction}   />

            </Modal.Body>
            <Modal.Footer>
     
                <button onClick={this.props.onHide} className="btn btn-primary" >Close</button>
            
            </Modal.Footer>
            </Modal>

        );

    }

}




export default AddItemModalDialog;
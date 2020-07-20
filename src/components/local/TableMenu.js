import React, { Component } from 'react';
import TableOrder from './TableOrder';
import Modal from 'react-bootstrap/Modal';

class TableMenu extends Component {

    state = {
        newOrderModalVisible : false
    }

    showNewOrderModal = () => {
        this.setState({newOrderModalVisible : true});
    }

    closeNewOrderModal = () => this.setState({newOrderModalVisible : false})

    render(){

        return (
            <div>
                <Modal
                size="sm"
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


                    <div className = "row">

                        <button type="button" 
                            onClick = {this.showNewOrderModal} 
                            class="btn btn-primary btn-lg btn-block"
                            show={this.state.newOrderModalVisible} onHide={this.closeNewOrderModal} >
                                New Order
                        </button>

                    <button type="button" class="btn btn-primary btn-lg btn-block">Order List</button>
                    <button type="button" class="btn btn-primary btn-lg btn-block">Bill</button>
                    </div>


                </Modal.Body>
                <Modal.Footer>

                    <button onClick={this.props.onHide} className="btn btn-primary" >Close</button>
                
                </Modal.Footer>
                </Modal>

                <TableOrder  table= {this.props.table}  addItemFunction = {this.addItem} 
                     show={this.state.newOrderModalVisible} onHide={this.closeNewOrderModal}  />    
            </div>
        )
    }

}

export default TableMenu;
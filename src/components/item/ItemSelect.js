
import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';

class Item extends Component {

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

    addItem = () => {

        this.props.addItemFunction(
            {
                item : this.state.items[this.state.itemId], 
                quantity : this.state.quantity            
            }
        );

    }

    componentDidMount(){
        axios
        ('http://localhost:3001/api/items', {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            }
          })

        .then(response => {
            // handle success
            let items = [];
            
            response.data.forEach(item => {

                items[item.id] = item;
                
            })

            this.setState({
                items
            });
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

        let options = [];

        this.state.items.forEach(item => {

            options.push(<option key = {item.id} value = {item.id}>{item.name}</option>);
            
        })

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


                <div className = "row">

                    <div className = "col-sm-9" >
                        <label htmlFor="itemId">Item</label>

                        <select id = "itemId" onChange = {this.handleChange}
                            defaultValue = {this.state.item?this.state.item.id:""} 
                            placeholder="Item"
                            className = "form-control" >

                            <option value = {0} key = {0} >Select...</option>
                            {
                                options
                            }
                        </select>
                    </div>

                    <div className = "col-sm-3" >
                        <label htmlFor="quantity" >Quantity:</label>
                        <input id = "quantity" type="number"  onChange = {this.handleChange} 
                            defaultValue = {this.state.quantity} className = "form-control"
                            placeholder="Quantity" />
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>

                <div className="btn-group float-right">
                    <button onClick={this.addItem}      className="btn btn-secondary" >Accept</button>
                    <button onClick={this.props.onHide} className="btn btn-secondary" >Cancel</button>
                </div>

            </Modal.Footer>
            </Modal>

        );

    }

}

export default Item;
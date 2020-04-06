
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import {connect} from 'react-redux';
import {fetchItems} from '../../store/actions/itemActions'

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
                item : this.props.items[this.state.itemId], 
                quantity : this.state.quantity            
            }
        );

    }

    componentDidMount(){
    
        this.props.fetchItems();
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


                <div className = "row">

                    <div className = "col-sm-9" >
                        <label htmlFor="itemId">Item</label>

                        <select id = "itemId" onChange = {this.handleChange}
                            defaultValue = {this.props.item?this.props.item.id:""} 
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


const mapStateToProps = (state) => {
    return {items : state.item.items}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => dispatch(fetchItems())
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Item);

import React, { Component } from 'react'

class Order extends Component {


    
    render(){

        let rows = [];
        
        this.props.items.forEach((element, i) => {
            rows.push(
                <tr key = {i}>
                    <td></td>
                    <td>{element.item.name}</td>
                    <td>{element.quantity}</td>
                </tr>
            )
        });
        
        return (
            rows.length !== 0 ?
                <div className = "table-responsive">
                    <table className = "table table-striped table-hover">
                        <thead >
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>

                </div>
            :
                <div>
                    No order item added
                </div>    

        );

    }

}

export default Order;
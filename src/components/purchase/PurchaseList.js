
import React, { Component } from 'react'

class PurchaseList extends Component {

    state = {
        purchaseList:[]
    }

    render(){

        return (
            this.purchaseList.length != 0 ?
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
                            <td>{this.state.purchase.id}</td>
                            <td>{this.state.purchase.created}</td>
                            <td>{this.state.purchase.createdBy}</td>
                            <td>{this.state.purchase.location.name}</td>
                        </tr>

                        </tbody>
                    </table>

                </div>

            :
                <div>
                    No purchase saved
                </div>    

        );

    }

}

export default PurchaseList;
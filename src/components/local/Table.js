import React, { Component } from 'react';
import TableMenu from './TableMenu';


class Table extends Component {

    state = {

        menuTableVisible : false

    }


    showTableMenu = () => {
        this.setState({menuTableVisible : true});
    }

    closeMenuTable = () => this.setState({menuTableVisible : false})

    render(){

        return (
            <div>
                <div style = {
                    {
                        backgroundColor : 'blue', 
                        width: '25%', 
                        height:'25%',
                        top : this.props.table.top_margin + '%',
                        left : this.props.table.left_margin + '%',
                        position: 'fixed'
                    }
                } 
                
                onClick = {this.showTableMenu}
                
                >

                {this.props.table.name}

                </div>

                <TableMenu  
                        show={this.state.menuTableVisible} onHide={this.closeMenuTable} table= {this.props.table}
                        />
            </div>

        );

    }

}

export default Table;
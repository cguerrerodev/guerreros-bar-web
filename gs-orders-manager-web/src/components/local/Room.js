
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchRooms} from '../../store/actions/localActions'
import Table from './Table';


class Room extends Component {

    componentDidMount(){

        this.props.fetchRooms('Local 1');
          
    }

    render(){

        let tables = [];
        
        if (this.props.local.rooms){
            this.props.local.rooms[0].tables.forEach(table => {
                            
            tables.push(<Table key = {table.id} table = {table} />);

            })

        }

        return (

            <div style={{height:'100%', position: 'fixed'}}>
            
                {
                    tables
                }

            </div>
        );

    }

}


const mapStateToProps = (state) => {
    return {local : state.local}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: (localName) => dispatch(fetchRooms(localName))
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Room);

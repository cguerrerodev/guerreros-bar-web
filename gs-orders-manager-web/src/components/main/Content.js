import React from 'react';
import PersonList from '../persons/PersonList';
import { Route } from 'react-router-dom';

function Content() {
  return (

    <div className="w3-main" style={{marginLeft:'250px', height :'80vmin'}}>
      <div className="w3-row w3-padding-64">
        <div className="w3-twothird w3-container">

          <Route path="/addstudent" exact component={PersonList} />

        </div>
      </div>
    </div>
  );
}

export default Content;
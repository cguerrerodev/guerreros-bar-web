import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'; 

import Menu from './components/main/Menu';
import Purchase from './components/purchase/Purchase';
import Inventory from './components/inventory/Inventory';
import Room from './components/local/Room';

function App() {
  return (
    <div className="App">
       <div className="containter">
          
          <BrowserRouter>
            <Menu />

            <Route path="/local" exact component={Room} />
            <Route path="/purchase" exact component={Purchase} />
            <Route path="/inventory" exact component={Inventory} />

          </BrowserRouter>

       </div>
    
    
    </div>
  );
}

export default App;

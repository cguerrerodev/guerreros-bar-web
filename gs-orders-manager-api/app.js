  
const express= require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnection = require('./persistence/dbconnection');

const purchaseManager = require('./businesslogic/purchaseManager');
const inventoryManager = require('./businesslogic/inventoryManager');
const localManager = require('./businesslogic/localManager');
const itemRepository = require('./persistence/itemRepository');

dbConnection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});


let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/locals/:localName/rooms', (req,res)=>{
    
    localManager.getRooms( req.params.localName, callBack = results => {
        res.json(results)
        res.end;
    });    

})


app.get('/api/items', (req,res)=>{
    
    itemRepository.getItems( callBack = results => {
        res.json(results)
        res.end;
    });    

})


app.get('/api/inventory', (req,res)=>{
    
    inventoryManager.getInventory(null,null, callBack = results => {
        res.json(results)
        res.end;
    });    

})


app.put('/api/purchase', (req,res)=>{
    
    purchaseManager.createPurchase(req.body, result => {
        res.json(result);
        res.end;
    });    

})

app.put('/api/purchaseorder', (req,res)=>{
    
    purchaseManager.createPurchaseOrder(req.body, result => {
        res.json(result);
        res.end;
    });    

})


app.listen(3001,() => console.log("Service started"));



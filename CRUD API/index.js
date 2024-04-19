const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route')
//middleware
const app = express();
app.use(express.json());//because we aren't allowed to pass json to our node, so use middleware
app.use(express.urlencoded({extended:false}));

//mongodb
const dbURL = 'mongodb+srv://jhnx16:abcd1234@backenddb.fsqupan.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB';
mongoose.connect (dbURL).then((result)=>app.listen(3000)).catch((err)=>{
    console.log(err);
})

//routes
app.use('/api/products',productRoute);


app.get('/',(req,res)=>{
    res.send("Hello from node API");
})

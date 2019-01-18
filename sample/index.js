var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const crud = require('@zeelmehta/crud_simplified');
var model = require('./model');
require('dotenv').config();
var app = express();

//Connecting to the database
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
    console.log("Connected to the database");
})
mongoose.Promise = global.Promise

app.use(bodyParser());

//Initial Screen
app.get('/', function (req,res){
    console.log("Called");
    res.send("Hello there");
})

//Create
app.post('/create', async function(req,res){
    var result = await crud.create(model,req.body)
    res.send(result)
})

//Read all the values
app.get('/read',async function(req,res){
    var result = await crud.readAll(model)
    res.send(result)
})

//Read by id
app.get('/read-by-id/:id', async function(req,res) {
    var result = await crud.readById(model,req.params.id)
    res.send(result)
})

//Update
app.post('/update/:id', async function(req,res){
    var result = await crud.update(model,req.body, req.params.id)
    res.send(result)
})

//Delete by id
app.get('/delete-by-id/:id', async function(req,res) {
    var result = await crud.deleteById(model,req.params.id)
    res.send(result)
})

//Delete all
app.get('/deleteAll', async function(req,res) {
    var result = await crud.deleteAll(model)
    res.send(result)
})

//Running the app on the port
let port = process.env.PORT || 4000
app.listen(port, function () {
    console.log("At port " + port);
});

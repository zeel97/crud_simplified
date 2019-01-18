const mongoose = require('mongoose');

//Model Schema
const ModelSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    }
})

const model = module.exports = mongoose.model('names', ModelSchema);
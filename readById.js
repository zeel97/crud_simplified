/*
  - Function name: readById
  - Description: the function retrieves a specific entry from the mongoDB model using the objectId 
  - Parameters:
        i. model: the model that needs to be accessed and manipulated
                  Eg: const model = module.exports = mongoose.model('names', ModelSchema);
        ii. Id: the unique id of the entry 
                  Eg: 5c3c1d84292af957f345fe38
  - Return: the function return the json value of the entry retrieved 
*/

var ObjectId = require('mongodb').ObjectID; 

const readById = async function readById(model, Id) {
    let record = await model.findOne({ '_id': new ObjectId(Id) }).exec()
    if (record !== null) {
        return record
    }
}

module.exports = readById
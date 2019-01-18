/*
  - Function name: deleteById
  - Description: the function deletes a specific entry from the mongoDB model using the objectId 
  - Parameters:
        i. model: the model that needs to be accessed and manipulated
                  Eg: const model = module.exports = mongoose.model('names', ModelSchema);
        ii. Id: the unique id of the entry that needs to be deleted
                  Eg: 5c3c1d84292af957f345fe38
  - Return: the function return the json value of the entry deleted 
*/

var ObjectId = require('mongodb').ObjectID;  

exports.deleteById = async function deleteById(model, Id) {
    let record = await model.findOneAndDelete({ '_id': new ObjectId(Id) }).exec()
    if (record != null) {
        return record
    }
    else {
        return 'Nothing to delete'
    }
}
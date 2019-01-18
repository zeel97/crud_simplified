/*
  - Function name: update
  - Description: the function updates a specific entry from the mongoDB model using the objectId 
  - Parameters:
        i. model: the model that needs to be accessed and manipulated
                  Eg: const model = module.exports = mongoose.model('names', ModelSchema);
        ii. Id: the unique id of the entry that needs to be updated
                  Eg: 5c3c1d84292af957f345fe38
  - Return: the function returns the json value of the new updated entry 
*/

var ObjectId = require('mongodb').ObjectID;  

exports.update = async function update(model,updatedData,Id) {
    var result = await model.findOneAndUpdate({ '_id': new ObjectId(Id) },updatedData,{new:true}).exec()
    return result
}
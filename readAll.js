/*
  - Function name: readAll
  - Description: the function returns all the entries in a mongoDB model 
  - Parameters:
        i. model: the model that needs to be accessed and manipulated
                  Eg: const model = module.exports = mongoose.model('names', ModelSchema);
  - Return: the function return the json array of all the entries in the model
*/

const readAll = async function readAll(model) {
    var results = await model.find().exec()
    return results
}

module.exports = readAll
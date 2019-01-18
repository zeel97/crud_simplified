/*
  - Function name: deleteAll
  - Description: the function clears the mongoDB model
  - Parameters:
        i. model: the model that needs to be accessed and manipulated
                  Eg: const model = module.exports = mongoose.model('names', ModelSchema);
  - Return: the function returns a json success result with n being the number of entries deleted
*/


const deleteAll = async function deleteAll(model) {
    let record = await model.deleteMany().exec()
    if (record !== null) {
        console.log(record);
        return record
    }
    else {
        return 'Database is empty'
    }
}

module.exports = deleteAll
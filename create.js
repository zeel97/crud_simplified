/*
  - Function name: create
  - Description: the function adds the details given to the given mongoDB model
  - Parameters:
        i. model: the model that needs to be accessed and manipulated
                  Eg: const model = module.exports = mongoose.model('names', ModelSchema);
        ii. data: this is the json input that needs to be added. Single and multiple entries can be added at once
  - Return: the function return the json value of the data saved in the model
*/

exports.create = function create(model,data) {
    try {
        if (Array.isArray(data)) {
        var entries = []
        for (var i=0;i<data.length;i++) {
            entries.push(create(model,data[i]))
        }
        return Promise.all(entries)
    }
    else {
        return addToModel(model,data)
    }
    } catch(error) {
        throw error
    }
}

/*
 addToModel function adds the individual entry 
*/
async function addToModel(model,data) {
    try {
        let create = await model.create(data)
        return create
    } catch(error) {
        throw error
    }
}

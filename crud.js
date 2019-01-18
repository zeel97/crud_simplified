
const create = function(model,data) {
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
}

async function addToModel(model,data) {
    try {
        let create = await model.create(data)
        return create
    } catch(error) {
        throw error
    }
}



const readAll = require('./readAll');
const readById = require('./readById');
const update = require('./update');
const deleteAll = require('./deleteAll');
const deleteById = require('./deleteById');

//Exporting all the crud functions
module.exports = {
    create,
    readAll,
    readById,
    update,
    deleteAll,
    deleteById
}

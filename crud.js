
const create = require('./create');
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

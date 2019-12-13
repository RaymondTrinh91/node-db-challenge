const db = require('../../data/db-config.js')

module.exports = {
    findResource,
    addResource
}

function findResource() {
    return db('resources')
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(ids => {
            const [id] = ids

            return db('resources')
                .select('*')
                .where({ id })
                .first()
        })
}
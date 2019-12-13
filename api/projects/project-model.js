const db = require('../../data/db-config.js')

const helper = require('../helper/helper.js')

module.exports = {
    findProject,
    addProject
}

function findProject() {
    return db('projects')
        .then(projects => {
            return projects.map(project => helper.convertBool(project))
        })

}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(ids => {
            const [id] = ids

            return db('projects')
                .select('*')
                .where({ id })
                .first()
                .then(project => {
                    return helper.convertBool(project)
                })
        })
}
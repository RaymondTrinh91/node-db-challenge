const db = require('../../data/db-config.js')

const helper = require('../helper/helper.js')

module.exports = {
    findTask,
    addTask
}

function findTask(project_id) {
    return db('tasks')
        .select("projects.name as Project Name"
            , "projects.description as Project Description"
            , "tasks.description as Task Description"
            , "tasks.notes"
            , "tasks.completed")
        .join('projects', 'tasks.project_id', "projects.id")
        .where("project_id", project_id)
        .then(tasks => {
            return tasks.map(task => helper.convertBool(task))
        })
}

function addTask(task, project_id) {
    return db('tasks')
        .insert({ ...task, project_id: project_id }, 'id')
        .then(ids => {
            const [id] = ids

            return db('tasks')
                .select("projects.name as Project Name"
                    , "projects.description as Project Description"
                    , "tasks.description as Task Description"
                    , "tasks.notes"
                    , "tasks.completed")
                .join('projects', 'tasks.project_id', "projects.id")
                .where("tasks.id", id)
                .first()
                .then(task => {
                    return helper.convertBool(task)
                })
        })
}
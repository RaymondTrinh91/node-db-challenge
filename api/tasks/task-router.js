const express = require('express')

const Tasks = require('./task-model.js')

const router = express.Router()

router.get('/:id/tasks', (req, res) => {
    const project_id = req.params.id
    Tasks.findTask(project_id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Server was unable to retrive tasks' })
    })
})

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body
    const project_id = req.params.id

    if(!newTask.description){
        res.status(400).json({ message: 'Please add a description' })
    } else {
        Tasks.addTask(newTask, project_id)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Server was unable to create task' })
        })
    }
})

module.exports = router
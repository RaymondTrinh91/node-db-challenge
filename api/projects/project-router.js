const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.findProject()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Server was unable to retrieve projects" })
    })
})

router.post('/', (req, res) => {
    const newProject = req.body

    if(!newProject.name){
        res.status(400).json({ message: "Please add a name" })
    } else {
        Projects.addProject(newProject)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Server was unable to create new project' })
            })
    }
})

module.exports = router
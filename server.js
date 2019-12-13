const express = require('express')

const projectRouter = require('./api/projects/project-router.js')
const resourceRouter = require('./api/resources/resource-router.js')
const taskRouter = require('./api/tasks/task-router.js')

const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/projects', taskRouter)
server.use('/api/resources', resourceRouter)

module.exports = server
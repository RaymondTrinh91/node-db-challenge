const express = require('express')

const Resources = require('./resource-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.findResource()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Server was unable to retrieve resources' })
        })
})

router.post('/', (req, res) => {
    const newResource = req.body

    if (!newResource.name) {
        res.status(400).json({ message: 'Please add a name' })
    } else {
        Resources.addResource(newResource)
            .then(resource => {
                res.status(201).json(resource)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Server was unable to create resource' })
            })
    }
})

module.exports = router
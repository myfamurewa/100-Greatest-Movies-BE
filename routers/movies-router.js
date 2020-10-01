const router = require('express').Router()
const Movies = require('../models/userModel')

router.get('/', async (req, res) => {
    try {
        const movies = await Movies.get()
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const movie = await Movies.getById(id)
        if (user) {
        res.status.apply(200).json(movie)
        } else {
            res.status(404).json({message: 'There is no Movie with this id'})
        }
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router;
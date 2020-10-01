const router = require('express').Router()
const Movies = require('../models/moviesModel')

router.get('/', async (req, res) => {
    // try {
    //     const movies = await Movies.get()
    //     console.log(movies)
    //     res.status(200).json(movies)
    // } catch (error) {
    //     res.status(500).json(error)
    // }
    Movies.get().then(movies => {
        console.log(movies)
        res.status(200).json(movies)
    }).catch(err => {
        console.log(err)
        res.status(500).json({Error: err})
    })
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    // try {
    //     const movie = await Movies.getById(id)
    //     if (user) {
    //     res.status.apply(200).json(movie)
    //     } else {
    //         res.status(404).json({message: 'There is no Movie with this id'})
    //     }
    // } catch(error) {
    //     res.status(500).json(error)
    // }
    Movies.getById(id).then(movie => {
        if(movie){
        console.log(movie)
        res.status(200).json(movie)
        } else {
            res.status(404).json({Error: "This movie isn't in the database"})
        }
    }).catch(err => {
        console.log(err)
        res.status(500).json({Error: err})
    })
})

module.exports = router;
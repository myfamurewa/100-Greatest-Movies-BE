const router = require('express').Router()
const Ratings = require('../models/ratingsModel')

router.get('/:id', (req, res) => {
    const {id} = req.params
    Ratings.getRatingsById(id).then(ratings => {
        console.log(ratings)
        if(ratings.length > 0){
            res.status(200).json(ratings)
        } else {
            res.status(404).json({message: "the movie that you are looking for doesn't exist or has no reviews at this point"})
        }
    }).catch(err => {
        res.status(500).json(err)
    })
});

router.get('/', (req, res) => {
    Ratings.getRatings().then(ratings => {
        res.status(200).json(ratings)
    }).catch(err => {
        res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
    const rating = req.body
    if(!req.body){
        res.status(400).json({message: "missing movie_id and rating"})
    }else if(!req.body.rating){
        res.status(400).json({message: "rating missing"})
    } else if(!req.body.movie_id){
        res.status(400).json({message: "movie_id missing"})
    }
    Ratings.newRating(rating).then(rating => {
        res.status(201).json(rating)
    }).catch(err => {
        console.log("stack", err.stack, "code", err.code, "name", err.name)
        res.status(500).json(err)
    })
});

module.exports = router;
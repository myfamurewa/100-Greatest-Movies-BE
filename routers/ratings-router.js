const router = require('express').Router()
const Ratings = require('../models/ratingsModel')

router.get('/:id', (req, res) => {
    const {id} = req.paramsparams
    Ratings.getRatingsById(id).then(ratings => {
        res.status(200).json(ratings)
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

module.exports = router;
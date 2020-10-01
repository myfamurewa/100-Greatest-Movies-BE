const router = require('express').Router()
const Comments = require('../models/commentsModel')

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const comments = await Comments.get(id)
        res.status(200).json(comments)
    } catch(error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    const comment = req.body
    if(!req.body.text){
        res.status(400).json({errorMessage: 'Please provide text for the comment'}
        )
    }
    Comments.insertComment(comment).then(id => {
        res.status(200).json(id)
    }).catch(err => {
        console.log('an error occurred', err)
        res.status(500).json({errorMessage: 'The post request was unsuccessful'})
    })
})

router.put('/:id', async (req, res) => {
    const comment = req.body
    const {id} = req.params
    if(!req.body.text){
        res.status(400).json({errorMessage: 'Please provide text for the comment'}
        )
    }
    Comments.editComment(id, comment).then(comment =>
        res.status(204).json(comment)
    ).catch(err => 
        res.status(500).json({errorMessage: 'Something went wrong', err})
    )
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    Comments.removeComment(id).then(success =>{
        if(success) {
            res.status(200).json({message: 'Comment was successfully deleted'})
        } else {
            res.status(404).json({message: 'Comment not found'})
        }
        
    })
    .catch (err => {
        console.log(err)
        res.status(500).json({errorMessage: 'There was an error deleting the comment.'})
    })
})

module.exports = router;
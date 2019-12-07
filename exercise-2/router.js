const express = require('express')
const { Router } = express
const Movies = require('./model')

const router = new Router()

router.post('/movies', (req, res, next) => {
    Movies.create(req.body)
    .then(movies => res.send(movies))
    .catch(err => next(err))
})

router.get('/movies', (req, res, next) => {
    Movies.findAll()
    .then(movies => res.send(movies))
    .catch(err => next(err))
})

router.get('/movies/:id', (req, res, next) => {
    Movies.findByPk(req.params.id)
    .then(movie => res.send(movie))
    .catch(err => next(err))
})

router.put('/movies/:id', (req, res, next) => {
    Movies.findByPk(req.params.id)
    .then(movies => movies.update(req.body))
    .then(movies => res.send(movies))
    .catch(err => next(err))
})

router.delete('/movies/:id', (req, res, next) => {
    Movies.destroy({where: {id: req.params.id}})
    .then(movie => res.send({movie}))
    .catch(err => next(err))
})

module.exports = router
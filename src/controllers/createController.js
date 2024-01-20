const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', (req, res) => {
   const data = req.body;
   movieService.create(data);
   res.send('')
});


module.exports = router;
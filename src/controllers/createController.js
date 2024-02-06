const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');
const {isAuth} = require('../middleweres/authMiddlewere');


router.get('/details/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    

    movie.rating = new Array(Number(movie.rating)).fill(true);

    res.render('movie/details', { movie });

});


router.get('/create', isAuth, (req, res) => {
    res.render('create')
});

router.post('/create', isAuth, async (req, res) => {
    const newMovie = {
        ...req.body,
        owner: req.user._id
    }

    try {

        await movieService.create(newMovie);

        res.redirect('/');

    } catch (error) {
        console.log(error.message);
        res.redirect('/create')
    }


});


router.get('/details/:movieId/attach', isAuth, async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAll().lean();

    res.render('movie/attach', { ...movie, casts });

});

router.post('/details/:movieId/attach', isAuth, async (req, res) => {
    const castId = req.body.cast; // vzemane na castId ot formata
    const movieId = req.params.movieId; //


    await movieService.attachCast(movieId, castId);

    res.redirect(`/details/${movieId}/attach`);
});

router.get('/details/:movieId/edit', isAuth, async (req, res) => {
 
    const movie = await movieService.getOne(req.params.movieId).lean();

    res.render('movie/edit', { movie });
});


module.exports = router;
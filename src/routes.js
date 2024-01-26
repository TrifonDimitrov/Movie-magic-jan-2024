const router = require('express').Router();

const homeView = require('./controllers/homeController');
const createPostView = require('./controllers/createController');
const castView = require('./controllers/castControler');


router.use(homeView);
router.use(createPostView);
router.use('/cast', castView);

router.get('*', (req, res) => {
    res.redirect('/404')
});


module.exports = router;
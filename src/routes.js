const router = require('express').Router();

const homeView = require('./controllers/homeController');
const createPostView = require('./controllers/createController');


router.use(homeView);
router.use(createPostView);

router.get('*', (req, res) => {
    res.redirect('/404')
});


module.exports = router;
const router = require('express').Router();

const homeView = require('./controllers/homeController');
const createPostView = require('./controllers/createController');
const castView = require('./controllers/castControler');
const authView = require('./controllers/authController');


router.use(homeView);
router.use(createPostView);
router.use('/cast', castView);
router.use('/auth', authView);

router.get('*', (req, res) => {
    res.redirect('/404')
});


module.exports = router;
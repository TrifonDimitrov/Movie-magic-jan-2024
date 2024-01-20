const router = require('express').Router();
const homeView = require('./controllers/homeController');
const createPostView = require('./controllers/createController');


router.use(homeView);
router.use(createPostView);


module.exports = router;
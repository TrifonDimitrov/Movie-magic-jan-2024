const router = require('express').Router();
const homeView = require('./controllers/homeController');


router.use(homeView);


module.exports = router;
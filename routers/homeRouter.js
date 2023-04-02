const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//Uses the homeController to retrieve the view and render the html file.
router.route('/')
    .get(homeController.homeView);

router.route('/myresume')
    .get(homeController.getWorkExperience);

router.route('/aboutme')
    .get(homeController.getAboutMe);
    
module.exports = router;
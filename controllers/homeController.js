const ejs = require('ejs');

//This returns the html page index. index is located under views. No url path needs to be specified.

exports.homeView = (req, res) => {
    res.render('pages/index', 
    {
        "page": "/",
        

    });
    //console.log('home page rendered');

};

exports.getWorkExperience = (req, res) => { res.render('pages/workExperience');}

exports.getAboutMe = (req, res) => { res.render('pages/aboutme'); }



//more

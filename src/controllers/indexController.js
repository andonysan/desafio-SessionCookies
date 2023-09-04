const {validationResult} = require('express-validator');
const User = require('../data/User');
const { locals } = require('../app');


module.exports = {
    index: (req, res) => {
        return res.render('index', { title: 'Express' });
    },
    processLogin: (req, res)=>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            console.log(req.body);
            // const newUser = new User(req.body);

            req.session.userLogin = [
                req.body.name, 
                req.body.email, 
                req.body.categoryColor
            ]
            // si llega remember con un check, creamos la cookie
            req.body.remember != undefined && res.cookie('formColorUser2023', req.session.userLogin,{
                maxAge: 1000*60*2
            });
            res.redirect('/dashboard');
        } else{
            res.render('index', {
                errors: errors.mapped(),
                old: req.body
            });
        }
        
    },
    dashboard: (req, res)=>{
        console.log(req.cookies.formColorUser2023)
        res.render('dashboard');
    },
    about: (req, res)=>{

        res.render('about')
    },
    logout: (req,res, next)=>{
        req.session.destroy();
        res.cookie('formColorUser2023', null, {
            maxAge: -1
        })
        res.redirect('/')
    }
    
}
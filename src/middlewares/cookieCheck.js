module.exports = (req, res, next)=>{
    if(req.cookies.formColorUser2023){
        req.session.userLogin = req.cookies.formColorUser2023;
    }
    next();
}
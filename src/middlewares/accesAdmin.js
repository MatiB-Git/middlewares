let admins = ['Greta', 'Ada', 'Tim'];

module.exports = (req,res,next) => {
    if(admins.includes(req.query.user)){
        res.send('Hola admin ' + req.query.user)
        next()
    }else{
        res.send('No tienes los privilegios para ingresar');
        res.redirect('login')
    }

}
module.exports = {
    index: (req,res) => res.render('index'),
    services: (req,res) => res.render('services'),
    design: (req,res) => res.render('design'),
    admin: (req,res) => res.render('admin'),
    login:(req,res) => res.render('login')
}
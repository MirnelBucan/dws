module.exports = {
  index: (req, res, next) => {
    res.render('index');
  },
  aboutus: (req, res, next) => {
    res.render('onama');
  },
  register: (req, res, next) => {
    res.render('register');
  },
  login: (req, res, next) => {
    res.render('login');
  },
  ostalo: (req, res, next) => {
    res.render('ostaleUsluge');
  },
  places: (req, res, next) => {
    res.render('grobnaMjesta');
  }
};
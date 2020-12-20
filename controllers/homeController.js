const indexView = (req, res, next) => {
    res.render ('home')
}

const iconsView = (req, res, next) => {
    res.render ('icons')
}

const profileView = (req, res, next) => {
    res. render ('profile')
}

const mapView = (req, res, next) => {
    res.render('map')
}

const tableView = (req, res, next) => {
    res.render ('tables')
}

const loginView = (req, res, next) => {
    res.render ('login')
}

const registerView = (req, res, next) => {
    res. render ('register')
}

module.exports = {
    indexView,
    iconsView,
    mapView,
    profileView,
    tableView,
    loginView,
    registerView
}
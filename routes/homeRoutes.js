const express = require ('express')

const {indexView, iconsView, mapView, profileView, tableView, loginView, registerView} = require ('../controllers/homeController')

const router = express.Router()

router.get('/', indexView)
router.get('/icons', iconsView)
router.get('/map', mapView)
router.get('/profile', profileView)
router.get('/tables', tableView)
router.get('/login', loginView)
router.get('/register', registerView)

module.exports = {
    routes: router
}
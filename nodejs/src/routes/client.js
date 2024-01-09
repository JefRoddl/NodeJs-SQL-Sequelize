let express = require('express')
let router = express.Router()
let create = require('./../controller/create')

router.get('/', (req, res) => {
    res.render('client_list')
})


router.get('/new', (req, res) => {
    res.render('client_new')
})

router.post('/new', create)


module.exports = router;
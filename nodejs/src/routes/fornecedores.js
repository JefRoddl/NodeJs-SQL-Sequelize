let express = require('express')
let router = express.Router()


router.get('/fornecedores/list', (req, res) => {
    res.render('fornecedores_list')
})

module.exports = router;
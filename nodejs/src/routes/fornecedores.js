let express = require('express')
let router = express.Router()
let create = require('../controllerFornecedores/createFornecedor')


router.get('/fornecedores/list', (req, res) => {
    res.render('fornecedores_list')
})

router.post('/', create)

module.exports = router;
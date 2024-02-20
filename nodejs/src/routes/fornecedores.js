let express = require('express')
let router = express.Router()
let create = require('../controllerFornecedores/createFornecedor')
let find = require('../controllerFornecedores/findFornecedor')

router.get('/', find)

router.get('/fornecedores', (req, res) => {
    res.render('fornecedores_new')
})

router.post('/', create)



module.exports = router;
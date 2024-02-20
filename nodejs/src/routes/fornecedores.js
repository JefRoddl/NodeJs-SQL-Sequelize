let express = require('express')
let router = express.Router()
let create = require('../controllerFornecedores/createFornecedor')
let find = require('../controllerFornecedores/findFornecedor')
let remove = require('../controllerFornecedores/removeFornecedor')

router.get('/', find)

router.get('/fornecedores', (req, res) => {
    res.render('fornecedores_new')
})

router.post('/', create)

router.delete('/:id', remove)



module.exports = router;
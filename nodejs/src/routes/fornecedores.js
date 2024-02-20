let express = require('express')
let router = express.Router()
let create = require('../controllerFornecedores/createFornecedor')
let find = require('../controllerFornecedores/findFornecedor')
let remove = require('../controllerFornecedores/removeFornecedor')
let update = require('../controllerFornecedores/updateFornecedores')

router.get('/', find)

router.get('/fornecedores', (req, res) => {
    res.render('fornecedores_new')
})

router.post('/', create)

router.delete('/:id', remove)

router.put('/:id', update)



module.exports = router;
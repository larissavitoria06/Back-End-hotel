const express = require('express')
const router = express.Router();

const clientes = require('./Controllers/clientes')
const telefone = require('./Controllers/telefone')
const quartos = require('./Controllers/quartos')
const reservas = require('./Controllers/reservas')
const estacionamento = require('./Controllers/estacionamento')

const teste = (req, res)=>{
    res.json("API Loja TI respondendo com sucesso!");
}

router.get('/',teste);
router.post('/clientes',clientes.create);
router.get('/clientes', clientes.read);


router.get('/',teste);
router.post('/telefone',telefone.create);
router.get('/telefone', telefone.read);


router.get('/',teste);
router.post('/quartos',quartos.create);
router.get('/quartos', quartos.read);


router.get('/',teste);
router.post('/reservas',reservas.create);
router.get('/reservas', reservas.read);

router.get('/',teste);
router.post('/estacionamento', estacionamento.create);
router.get('/estacionamento', estacionamento.read);


module.exports = router;
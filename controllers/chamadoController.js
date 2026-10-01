const chamadoService = require('../services/chamadoServices')

function criar(req, res){
    try{
    console.log("1 - CONTROLLER recebeu", req.body);
    const chamado = chamadoService.criar(req.body);
    return res.status(201).json(chamado);
    }catch(error){
        res.status(404).json(error.message)
    }
    
}

module.exports = { criar }
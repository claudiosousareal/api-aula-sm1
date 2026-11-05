const chamadoService = require('../services/chamadoServices')

function criar(req, res){
    try{
    console.log("1 - CONTROLLER recebeu", req.body);
    const chamado = chamadoService.criar(req.body);
    return res.status(201).json(chamado);
    }catch(error){
        res.status(404).json({mensagem:error.message})
    }
}

function listar(req, res){
    const chamados = chamadoService.listar();
    res.status(200).json(chamados);
}

function buscarPorId(req, res){
    
    const chamado = chamadoService.buscarPorId(req.body.id);

    if(!id){
        return res.status(404).json({
            erro:"Chamado não encontrado!"
        })
    }

    return res.status(200).json(chamado);
}


module.exports = { 
    criar,
    listar,
    buscarPorId
 }
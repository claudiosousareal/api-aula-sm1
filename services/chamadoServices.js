const { suporteN1 } = require('../handlers/suporteHandler')
const chamadoRepository = require('../repositories/clamadoRepository');

function criar(dados){
    console.log("2 - SERVICE recebeu", dados);
    const chamado = {
        id: 1,
        titulo: dados.titulo,
        prioridade:dados.prioridade,
        especialidade:dados.especialidade,
        status:"aberto" 
    }

    chamado.responsavel = suporteN1(chamado);

    const chamadoSalvo = chamadoRepository.salvar(chamado)

    console.log("3 - SERVICE salvou", chamadoSalvo);

    return chamadoSalvo
}

function listar(){
    return chamadoRepository.listar();
}

function buscarPorId(id){
    return chamadoRepository.buscarPorId(id);
}

module.exports = { 
    criar,
    listar,
    buscarPorId
 };
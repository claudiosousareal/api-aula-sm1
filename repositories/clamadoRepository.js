const chamados = [];

let proximoId = 1;

function salvar(chamado){
    const novoChamado = {
        ...chamado,
        id: proximoId++
    }
    chamados.push(novoChamado);
    return novoChamado
}

function listar(){
    return [...chamados];
}

function buscarPorId(id){
    return chamados.find(
        chamado => chamado.id === Number(id)
    )
}

module.exports = {
    salvar,
    listar,
    buscarPorId
}
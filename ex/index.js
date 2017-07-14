const produto = {
    nome: 'caneta Big Preta',
    preco: 1.80,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'caneta Big Azul'

console.log(produto)
console.log(novoProduto)
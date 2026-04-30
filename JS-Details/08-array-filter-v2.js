const produtos = [
   {
    descricao : "Camisa Polo",
    cor : "verde",
    preco : 49.99,
    perfil : "M",
    quantidade : 10,
    promocao : false
   },
   {
    descricao : "Camisa Polo",
    cor : "azul",
    preco : 29.99,
    perfil : "f",
    quantidade : 7,
    promocao : true
   },
   {
    descricao : "Camisa Polo",
    cor : "amarela",
    preco : 49.99,
    perfil : "M",
    quantidade : 4,
    promocao : true
   },
   {
    descricao : "Camisa Polo",
    cor : "rosa",
    preco : 49.99,
    perfil : "f",
    quantidade : 7,
    promocao : false
   },

];
// CamisetaF = produtos.filter((produtos) => {

//     return CamisetaF.perfil =="F"
// });
// console.log(CamisetaF);
let qtdPromocao = 0;

const produtosPromocao = produtos.filter((produto) => {
    if(produto.promocao == true) {
        qtdPromocao += produto.quantidade;
    }
    return produto.promocao ==true;
});

console.log(`Quantidade de produtos em promocao: ${qtdPromocao}`);
console.log(produtosPromocao);
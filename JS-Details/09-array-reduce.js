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
let totalPreco = 0;
let totalProdutos = produtos.reduce((total, p) => {
    totalPreco += p.Preco * p.quantidade;
    return total + p.quantidade;

}, 0);

console.log(`Voce tem um total de ${totalProdutos} produtos no estoque`);
console.log(`O valor total de produto no estoque é ${totalPreco.tofixed(2)}`);
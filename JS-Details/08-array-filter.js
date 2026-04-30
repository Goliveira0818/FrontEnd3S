const numeros = [5, 10, 14, 18, 19, 5, 71, 10];

const numerosEncontrados = numeros.filter((n) => {
    return n == 10;
});
console.log(numerosEncontrados);

const nome = [
    "Walyson",
    "Davi",
    "Edu",
    "Laura",
    "Livia",
    "Amy",
    "Lucas"
];

pessoasLetraL = nome.filter((nome) => {
    const primeiraletra = nome.substring(0,1);
    return primeiraletra == "L" || primeiraletra == "A";
});
console.log(pessoasLetraL);

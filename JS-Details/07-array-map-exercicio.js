const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    500,
    9876,
    99,
    134
];

const dobro = numeros.map((numero) => {
   return numero * 2;
});
let Resultado = "";
dobro.forEach((numero) =>{
    Resultado += `${numero} | `;
});
//str.substring(0,str,length -1);
Resultado = Resultado.substring(0, Resultado.length -3);

console.log(Resultado);
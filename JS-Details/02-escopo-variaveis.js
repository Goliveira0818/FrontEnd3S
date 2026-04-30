const nome = "Eduardo";

let sobrenome = "Felix";
{
    const nomes = "Lucas";
    let sobrenome = "Costa";
    console.log(`Nome Completo: ${nome} ${sobrenome}`);
}
sobrenome = 600.97;
sobrenome = true;

console.log(`Nome Completo: ${nome} ${isNaN(sobrenome)}`);

const nomes = ["Lucas", "Maria"];
for (let i = 0; i < nomes.length; i++)
{   
    console.log(`Nome ${i}: ${nome[1]}`);
}
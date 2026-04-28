function calcular() {
    //nome
    const nome = document.getElementById("nome").value;
    const altura = parseFloat (document.getElementById("altura"). value);
    const peso = parseFloat (document.getElementById("peso").value);


    console.log(nome);
    console.log(altura);
    console.log(peso);

    if(nome.trim().legth == 0 || 
       altura.trim().legth == 0 || 
       peso.trim().legth == 0) || 

       { alert("preencher todos os campos");
        return false;

    }
}
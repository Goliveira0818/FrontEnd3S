



async function buscarEndereco(cep) {

    //quando o cep nao vier preenchido
   if(cep.trim().length < 8){
    alert("o CEP deve conter 8 numeros");
    return false;
   }
    //buscar o CEP la na ViaCEP
    try{
        aguardandoCampos();
    let retorno = await fetch("https://viacep.com.br/ws/09942100/json/");
    let dados = await retorno.json();
    console.log(dados);
    console.log(dados.logradouro);
    console.log(daddos.bairro);

    document.getElementById("rua").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("cidade").value = dados.Localidade;
    document.getElementById("Estado").value = dados.Estado;

    }catch(error){
        console.log(error);
    }
}

function aguardandoCampos() {
     document.getElementById("rua").value = "aguarde....";
    document.getElementById("bairro").value = "aguarde....";
    document.getElementById("cidade").value = "aguarde....";
    document.getElementById("Estado").value = "aguarde....";
}





function validarFormulario(){
    let Nome = document.getElementById("Nome").value;
    
    let Sobrenome = document.getElementById("Sobrenome").value;

    let Email = document.getElementById("Email").value;

    let Telefone = document.getElementById("Telefone").value;

    let Endereço = document.getElementById("Endereço").value;

    let Anotacoes = document.getElementById("Anotacoes").value;

    
    let quantidadeErros = 0;
    if(Nome.trim().length == 0){
        formError("Nome");
        quantidadeErros++;
       // alert("O campo nome é obrigatório!");
    }else{
        reiniciaBorda("Nome");
    }
    if(Sobrenome.trim().length == 0){
        formError("Sobrenome");
        quantidadeErros++;
       // alert("O campo nome é obrigatório!");
    }else{
        reiniciaBorda("Sobrenome");
    }




    if(Email.trim().length == 0){
        formError("Email");
        quantidadeErros++;
       // alert("O campo nome é obrigatório!");
    }else{
        reiniciaBorda("Email");
    }
    if(Telefone.trim().length == 0){
        formError("Telefone");
        quantidadeErros++;
       // alert("O campo nome é obrigatório!");
    }else{
        reiniciaBorda("Telefone");
    }
    if(Endereço.trim().length == 0){
        formError("Endereço");
        quantidadeErros++;
       // alert("O campo nome é obrigatório!");
    }else{
        reiniciaBorda("Endereço");
    }
    if(Anotacoes.trim().length == 0){
        formError("Anotacoes");
        quantidadeErros++;
       // alert("O campo nome é obrigatório!");
    }else{
        reiniciaBorda("Anotacoes");
    }

    if(quantidadeErros > 0){
        alert("Existem" + quantidadeErros + "erros no formulario!");
        quantidadeErros = 0;
    }else{
        alert("formulario enviado com sucesso!");
        reiniciaTodasAsBordas();
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";

}
function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.border = "transparent";
}
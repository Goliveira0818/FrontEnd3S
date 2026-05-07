import "./produto.css"

const Produto = ({nome, preco, descricao}) => {
    return(
    
      <p>

    Produto : {nome} <br/>
    preco : {preco.toFixed(2)} <br/>
    descricao : {descricao} 
    
    </p>

       
 )
}      

export default Produto;
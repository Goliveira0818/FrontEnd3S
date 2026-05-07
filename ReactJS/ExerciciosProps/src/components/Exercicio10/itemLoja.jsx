import "./itemLoja.css"

function ItemLoja(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>Nome: {props.nome}</p>
      <p>Categoria: {props.categoria}</p>
      <p>Preco: {props.preco}</p>
      <p>estoque: {props.estoque}</p>
    </div>
  );
}

export default ItemLoja;
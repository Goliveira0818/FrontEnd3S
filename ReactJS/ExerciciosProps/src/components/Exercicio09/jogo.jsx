import "./jogo.css";

function Jogo(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>Nome: {props.nome}</p>
      <p>Plataforma: {props.plataforma}</p>
      <p>Preco: {props.preco}</p>
      <img src={props.imagem}/>
    </div>
  );
}

export default Jogo;
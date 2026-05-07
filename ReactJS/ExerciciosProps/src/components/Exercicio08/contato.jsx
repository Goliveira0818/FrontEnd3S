import "./contato.css"

function Contato({ nome, email, telefone }) {
  return (
    <div className="contato">
      <h2>{nome}</h2>
      <p>Email: {email}</p>
      <p>Telefone: {telefone}</p>
    </div>
  );
}       
export default Contato;
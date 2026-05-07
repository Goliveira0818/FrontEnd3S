import "./perfil.css"

// const Perfil = ({nome, email, telefone}) => {
//     return(  
//  <p>

//     Nome : {nome} <br/>
//     Email : {email} <br/>
//     Telefone : {telefone}   

// </p> 
//     )
// }
export const Cardperfil = ({ nome, idade, profissao }) => {    
    return (
        <article className="card-perfil">
            <span className="card-perfil__title">{nome}</span>
            <span className="card-perfil__title">{idade}</span>
            <span className="card-perfil__title">{profissao}</span>
        </article>
    );
}
export default Cardperfil;
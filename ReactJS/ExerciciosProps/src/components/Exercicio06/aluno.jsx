import "./aluno.css"

export const Aluno = ({ nome, curso, imagem }) => {
    return (
       <p>
        Nome: {nome} <br/>
        Curso: {curso} <br/>
        <img src={imagem} alt={nome} className="aluno-imagem"/>

       </p>
    );
}                   

export default Aluno;
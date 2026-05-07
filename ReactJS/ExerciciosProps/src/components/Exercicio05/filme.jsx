import "./filme.css"

const Filme = ({titulo, genero, ano, nota}) => {
    return(
     
        <p>

            Genero: {genero} <br/>
            Titulo: {titulo} <br/>
            Ano: {ano} <br/>
            nota: {nota}

        </p>   
    )
}

export default Filme;
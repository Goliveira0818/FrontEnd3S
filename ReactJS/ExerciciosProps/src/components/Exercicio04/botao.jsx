import "./botao.css"

const Botao = ({ texto, onClick }) => {
    return (
        <
            button style={{ backgroundColor: "lightblue", color: "white", border: "1px solid #da5d5dff", padding: "10px 20px", cursor: "pointer" }} onClick={onClick}>
            {texto}
        </button>
    )
}

export default Botao;
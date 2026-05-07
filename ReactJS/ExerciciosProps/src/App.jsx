import "./App.css"
import MyComponents from "./components/children/mycomponents"
import Saudacao from "./components/Exercicio01/saudacao"
import Produto from "./components/Exercicio02/produto"
import Perfil from "./components/Exercicio03/perfil"  
import Botao from "./components/Exercicio04/botao"
import Filme from "./components/Exercicio05/filme"  
import Aluno  from "./components/Exercicio06/aluno"
import Card from "./components/Exercicio07/card"
import Contato from "./components/Exercicio08/contato"
import Jogo from "./components/Exercicio09/jogo"
import ItemLoja from "./components/Exercicio10/itemLoja"


// const App = () => {

// const pessoas = [
//   {id: 1,
//      nome: "Eduardo",
//       idade: "31",
//       profissao: "Desenvolvedor Front-end"
//   }
//   ,
//   {id: 2,
//     nome: "Maria",
//      idade: "28",
//    profissao: "Designer Gráfico"
// }
// ,
// {id: 3,
//   nome: "Gustavo",
//    idade: "17",
//     profissao: "Barbeiro"
// },
// ]

//  return (
//         <>
//             {pessoas.map((p) => {
//                 return <Cardperfil
//                     key={p.id}
//                     nome={p.nome}
//                     idade={p.idade}
//                     profissao={p.profissao}
//                 />;
//             })}
//         </>
//     );



  function App() {
    return (
      <>
        {/* <Saudacao nome="Eduardo"/>
            <Saudacao nome="Maria"/> */}
        <MyComponents>
          <Saudacao nome="Lucas" />
          <Produto
            nome="Notebook"
            preco={5000}
            descricao="Notebook Gamer" />
          <Perfil
            nome="Eduardo"
            email="Eduardo@gmail.com"
            telefone="(11) 96666-1234" />
          <Botao
            texto="Clique aqui"
            onClick={() => alert("Botão clicado!")} />
          <Filme
            titulo="O Poderoso Chefão"
            Genero="Crime/Ficção policial"
            ano={1972}
            nota={9.2} />
          <Aluno
            nome="Maria"
            curso="Engenharia de Software"
            imagem="https://cdn-icons-png.flaticon.com/256/17/17004.png" />
          <Card>
            <h2>Cartão de Presente</h2>
            <p>Parabéns pelo seu aniversário!</p>
          </Card>
          <Contato
            nome="João"
            telefone="(11) 96666-5678"
            email="joao@gmail.com" />
          <Contato
            nome="Julia"
            telefone="(11) 96666-6478"
            email="julia@gmail.com" />
          <Contato
            nome="Gustavo"
            telefone="(11) 96666-9876"
            email="gustavo@gmail.com" />
          <Contato
            nome="Endrick"
            telefone="(11) 96666-4321"
            email="endrick@gmail.com" />
          <Contato
            nome="Marcos"
            telefone="(11) 96666-8765"
            email="marcos@gmail.com" />
          <Jogo
            titulo="The Legend of Zelda: Breath of the Wild"
            nome="Zelda"
            genero="Aventura"
            plataforma="Nintendo Switch"
            preco={200}
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycJA43zk2hN-v4XLx9_LrAQ9y2TfRs9C3Sw&s" />
          <ItemLoja
            titulo="Produto em Destaque"
            nome="Smartphone"
            categoria="Eletrônicos"
            preco={1500}
            estoque={20} />

        </MyComponents>
      </>
    )
  }

export default App;
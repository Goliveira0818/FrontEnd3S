import { useState } from "react";
import CicloDeVida from "./components/ciclodevida/ciclodevida";
// import Contador from "../componentes/contador/contador";
// import CadFruta from "./components/CadFruta/cadfruta";

function App (){
  
  const[mostrar, setMostrar] = useState("true");

  const[nome, setNome] = useState("Google");
  
function mudarTexto(){
  setNome("microsoft");
}

function fuiAbandonado(){
  setNome("Input foi abandonado :(");
}

  return( 
    <>
  {/* <h1>{nome} Page</h1>
  <button onClick={mudarTexto}>Mudar Texto</button>
  <button onClick={() => {return setNome("Instagram")}}>Mudar Texto 2</button>

  <br />
  <input
   type="text" onBlur={fuiAbandonado}
   onChange={(e) => setNome(e.target.value)} /> */}


{/* 
    <Contador />
    <br /><br />
    <p>Lorem ipsum, dolor <strong>{nome}</strong></p> */}

    {/* <CadFruta />
  </> */}
  {/* <button onClick={() => {
  setMostrar(!mostrar);
  }}>Mostrar / Ocultar</button>
   {mostrar && <CicloDeVida />}
    */}
  
    
);
  }

export default App;
import { use, useEffect, useState } from "react";
import "./ciclodevida.css";

export default function CicloDeVida (){
    const [contador, setContador] = useState(0)
    useEffect(() => {
      console.log("Componente foi montado")

      return () => {
        console.log("Componente foi desmontado")
      }
    }, [])

    useEffect(() => {
        console.log("Contador foi atualizado");
        console.log(`Valor do contador: ${contador}`);
    }, [contador])  

    return(
        <>
        <h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>
            Contar</button>
        </>
    );

}
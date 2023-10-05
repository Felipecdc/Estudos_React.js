import React, { useEffect, useState } from "react";
import './styles.css';
// https://sujeitoprogramador.com/rn-api/?api=posts

function App(){

    const [nutri, setNutri] = useState([])

    // useEffect para chamar a api assim que entrar na pagina
    useEffect(() => {

        function loadApi(){
            // API web utilizada no teste 
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

            // Método fetch para requisições web, api...
            // Dois then, um para transformar em json e outro para utilização em state
            fetch(url)
            .then((r) => r.json())
            .then((json) => {
                //console.log(json)
                setNutri(json)
            })
        }

        loadApi();

    }, [])

    return(
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>

            {nutri.map((item) => {
                return(
                    <article key={item.id} className="post">
                        <strong className="titulo">{item.titulo}</strong>
                        <img src={item.capa} alt={item.titulo} className="capa" />
                        <p className="subtitulo">
                            {item.subtitulo}
                        </p>
                        <a className="botao">Acessar</a>
                    </article>
                )
            })}
        </div>
    )
}

export default App;

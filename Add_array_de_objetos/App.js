/*
*Estudo de React js para renderizar um array de objetos
*e inserir novas informações no array com a mesma formatação 
*de valores com um input de nome e outro de idade, mais 
*um button para executar a função de add
*/

import React, { useState } from 'react';
import './styles.css'

function App(){

    const [tarefas, setTarefas] = useState([
        {nome:  'Felipe', idade: '21'},
        //{nome: nome, idade:idade}
    ])

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    function add(){
        setTarefas([...tarefas, {nome: nome, idade: idade}])
    }

    return(
        <div>
            {tarefas.map((v,i) => (
                <p key={i}>{v.nome}, {v.idade}</p>
            ))}
            <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
            <input type='text' value={idade} onChange={e => setIdade(e.target.value)}/>
            <button onClick={add}>Adicionar</button>
        </div>
    )
}

export default App;

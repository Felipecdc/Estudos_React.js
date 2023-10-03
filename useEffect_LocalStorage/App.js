/*
*Aplicão para aprendizado do uso de useEffect e LocalStorage 
*em React.js, usando um sistema de array de objetos
*com inputs e botao para execução da atividade
*
* useEffect, useMemo, useCallback... Atualização do codigo github.
*/

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import './styles.css'

function App(){

    const [tarefas, setTarefas] = useState([])

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    useEffect(() => {
        // Const para acessar o LocalStorage e chamar os itens registrados
        const storage = localStorage.getItem('tarefas')
        // Verificando se existe algum item salv0, caso sim, retornar 
        //em formato JSON.parse() "JSON"
        if(storage){
            setTarefas(JSON.parse(storage))
        }

        return () => {}
    }, [])

    // abrindo o useEffect assim que o input sofrer uma alteração
    useEffect(() => {
        // Salvando dados do input dentro do LocalStorage no formato 
        // JSON.strinfy() "string"
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas])

    // useCallback para economizar o uso de processamento 
    // chamando a const apenas quando um dos parametros sofrerem alteração
    const add = useCallback(() => {
        setTarefas([...tarefas, {nome: nome, idade: idade}])
    }, [nome, idade, tarefas])

    // Uso de useMemo para evitar loading e atrasos de renderizações
    // em aplicações de grande porte
    const totalTask = useMemo(() => tarefas.length, [tarefas])

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

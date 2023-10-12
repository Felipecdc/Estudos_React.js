import { UserContext } from "../../Contexts/user";
import { useContext, useState } from "react";

function Nome(){

    const { alunos, setAlunos } = useContext(UserContext)
    const [input, setInput] = useState('')

    return(
        <div>
            <span>Bem vindo: {alunos}</span>
            <br/>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={() => setAlunos(input)}>Mudar</button>
        </div>
    )
}

export default Nome;
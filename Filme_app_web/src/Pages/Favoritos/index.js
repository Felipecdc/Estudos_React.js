import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Toast, toast } from 'react-toastify';
import './styles.css';

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhalist = localStorage.getItem('@filme')
        setFilmes(JSON.parse(minhalist) || [])

    }, [])

    function excluir(id){
        const minhalist = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(minhalist)
        localStorage.setItem('@filme', JSON.stringify(minhalist))
        toast.success('Filme removido com sucesso!')
    }


    return(
        <div className='meus_filmes'> 
            <h1>Minha lista</h1>

            {
                filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>
            }

            <ul>
                {
                    filmes.map((filme) => {
                        return(
                            <li key={filme.id}>
                                <samp>{filme.title}</samp> 
                                <div>
                                    <Link to={`/Filmes/${filme.id}`}>Ver detalhes</Link>
                                    <button onClick={ () => excluir(filme.id) }>Excluir</button>
                                </div>
                            </li>
                        )
                        })
                }
            </ul>
        </div>
    )
}

export default Favoritos;
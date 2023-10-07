import { useEffect, useState } from 'react';
import './styles.css';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

// URL : /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home(){
    
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        async function LoadFilmes(){
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: 'b6d3c58e0dcc59262e74c7e8acf29903',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }

        LoadFilmes();

    }, [])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='list_filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img
                            src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                            alt={filme.title}
                            />
                            <Link to={`/Filmes/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                    })}
            </div>
        </div>
    )
}

export default Home;
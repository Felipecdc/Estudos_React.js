import { Link } from 'react-router-dom';
import './styles.css'

function Erro(){
    return(
        <div className="notFound">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to='/'>Vejá todos os filmes!</Link>
        </div>
    )
}

export default Erro;
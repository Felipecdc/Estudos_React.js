import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Arquivos das paginas
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';

function RoutesApp(){
    return(
        <BrowserRouter>
        // Container para navegação de rotas
      
            <Routes>
            // Divisor de arquivos de rotas

                <Route
                path='/'
                element={<Home/>}
                />
                // Arquivo unico de rota

                <Route
                path='/Sobre'
                element={<Sobre/>}
                />
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;

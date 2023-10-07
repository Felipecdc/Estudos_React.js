import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Filmes from './Pages/Filmes';
import Header from './Components/Header';
import Favoritos from './Pages/Favoritos';
import Erro from './Pages/Erro';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>

                <Route
                path='/'
                element={<Home/>}
                />

                <Route
                path='/Filmes/:id'
                element={<Filmes/>}
                />

                <Route
                path='/Favoritos'
                element={<Favoritos/>}
                />

                <Route
                path='*'
                element={<Erro/>}
                />

            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp;
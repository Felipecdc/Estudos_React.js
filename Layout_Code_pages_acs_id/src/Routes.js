import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Header from './Components/Header';
import Erro from './Pages/Erro';
import Produto from './Pages/Produto';

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
                path='/Sobre'
                element={<Sobre/>}
                />

                <Route
                path='/Produto/:id'
                element={<Produto/>}
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
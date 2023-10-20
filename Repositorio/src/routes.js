import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Pages/Main';
import Repositorio from './Pages/Repositorio';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Main/>} />  
                <Route exact path='/repositorio/:repositorio' element={<Repositorio/>}/>  
            </Routes>
        </BrowserRouter>
    )
}
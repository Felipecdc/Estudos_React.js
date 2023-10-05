import React from "react";
import { Link } from 'react-router-dom';
// Link é o botão de transição entre paginas

function Home() {
  return (
    <div className="App">
      <h1>BEM VINDO A TELA DE HOME</h1>

      // usar dentro do link o método to="" com o nome da página que deseja navegar
      <Link to="Sobre">Sobre</Link>
    </div>
  );
}

export default Home;

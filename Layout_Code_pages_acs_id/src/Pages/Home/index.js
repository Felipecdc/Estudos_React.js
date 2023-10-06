import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <h1>BEM VINDO A TELA DE HOME</h1>
      <Link to="/Produto/123123">produto 123</Link>
    </div>
  );
}

export default Home;

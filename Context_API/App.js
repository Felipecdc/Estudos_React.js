import { useState } from 'react';
import Alunos from './Components/Alunos';
import UserProvider from './Contexts/user';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Escola</h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;

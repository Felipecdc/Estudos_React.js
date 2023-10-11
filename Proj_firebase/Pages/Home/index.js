import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home(){

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  async function handleLogin(e){
    e.preventDefault();
    if(email !== '' && senha !== ''){
      await signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        setEmail('')
        setSenha('')
        navigate('/admin', {replace: true})
      })
      .catch((err) => {
        console.log('Error ao logar' + err)
      })
    }else{
      alert('Preencha todos os campos')
    }
  }

  return(
    <div className='home_container'>

      <h1>Lista de tarefas</h1>
      <span>Gerencie sua agende de forma fácil</span>

      <form className='form' onSubmit={handleLogin}>
        <input 
        type='text' 
        placeholder='Digite seu email'
        value={email}
        onChange={ e => setEmail(e.target.value)}
        />
        <input 
        autoComplete={false}
        type='password' 
        placeholder='**********'
        value={senha}
        onChange={ e => setSenha(e.target.value)}
        />
        <button type='submit'>Acessar</button>
      </form>

      <Link to={'/register'} className='button_link'>
      Não possui uma conta? Cadastre-se
      </Link>

    </div>
  )
}
  
  export default Home;
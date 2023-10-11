import { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Register(){

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  async function handleRegister(e){
    e.preventDefault();
    if(email !== '' && senha !== ''){
      await createUserWithEmailAndPassword(auth, email, senha)
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

      <form className='form' onSubmit={handleRegister}>
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
        <button type='submit'>Criar conta</button>
      </form>

      <Link to={'/'} className='button_link'>
      Já possui uma conta? Faça o login
      </Link>

    </div>
  )
}
  
  export default Register;
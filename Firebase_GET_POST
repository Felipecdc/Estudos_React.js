import { db } from './firebase';
import { useState, useEffect } from 'react';
import { doc, setDoc, addDoc, collection, getDocs, getDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import './styles.css'

function App() {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [idpost, setIdpost] = useState('')
  const [post, setPost] = useState([])


  // Buscar itens do firebase firestore em tempo real com o onSnapshot
  useEffect(() => {
    async function LoadPosts(){
      const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            autor: doc.data().autor,
            titulo: doc.data().titulo
          })
        })
        setPost(list)
      })
    }
    LoadPosts();
  }, [])

  // Adicionar item ao banco do firestore ao clicar no botao que chama a função
  async function handleadd(){
    await addDoc(collection(db, 'posts'),{
      autor: autor,
      titulo: titulo
    })
    .then(() => {
      setAutor('')
      setTitulo('')
    })
    .catch((err) => {
      console.log('error' + err)
    })
  }

  // Buscar itens do banco firestore apena s ao clicar no botao que chama a função
  async function buscarpost(){
    const posts = collection(db, 'posts')
    await getDocs(posts)
    .then((snapshot) => {
      let lista = []
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })
      setPost(lista)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // Editar item do banco ao clicar no botao que chama a função de editar
  async function edit(){
    const docref = doc(db, 'posts', idpost)
    await updateDoc(docref, {
      titulo: titulo,
      autor: autor
    })
    .then((snapshot) => {
      setAutor('')
      setTitulo('')
      setIdpost('')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // Excluir item do banco firestore ao clicar no botao e passar o id
  async function excluir(id){
    const post = doc(db, 'posts', id)
    await deleteDoc(post)
    .then(() => {
      alert('Post deletado com sucesso!')
    })
  }

  return (
    <div className="App">
      <h1>teste</h1>

      <div className="container">
        <label>ID do post</label>
        <input 
        placeholder="Digite o id do post" 
        type='text'
        value={idpost}
        onChange={ e => setIdpost(e.target.value)}
        />
        <label>Titulo</label> 
        <textarea 
        placeholder="Digite o titulo" 
        type="text" 
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        />
        <label>Autor</label>
        <input 
        type="text" 
        placeholder='Autor do post' 
        value={autor}
        onChange={e => setAutor(e.target.value)}
        />
        <button onClick={handleadd}>Cadastrar</button>
        <button onClick={buscarpost}>Buscar post</button>
        <button onClick={edit}>Atualizar post</button>
        <ul>
          {post.map((i) => {
            return(
              <li key={i.id}>
                <strong>ID: {i.id}</strong><br/>
                <span>Autor: {i.autor}</span><br/>
                <span>Titulo: {i.titulo}</span><br/>
                <button onClick={() => excluir(i.id)}>Excluir</button><br/><br/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

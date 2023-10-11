import './Admin.css'
import { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

import { addDoc, collection, onSnapshot, query, orderBy, where, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'

function Admin(){

    const [tarefainput, setTarefainput] = useState('')
    const [edit, setEdit] = useState({})
    const [user, setUser] = useState({})
    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        const userDetail = localStorage.getItem('@infoUser')

        async function Load(){
            setUser(JSON.parse(userDetail))
        }
        Load();

        if(userDetail){
            const data = JSON.parse(userDetail)
            const tarefaRef = collection(db, 'tarefas')
            const q = query(tarefaRef, orderBy('created', 'desc'), where('userUid', '==', data?.uid))
            const unsub = onSnapshot(q, (snapshot) => {
                let list = []
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        tarefa: doc.data().tarefa,
                        userUid: doc.data().userUid
                    })
                })
                setTarefas(list)
                console.log(list)
            })
        }

    }, [])

    async function handleRegister(e){
        e.preventDefault()
        if(tarefainput == ''){
            alert('Digite sua tarefa!')
            return;
        }

        if(edit?.id){
            handleUpdateTarefa();
            return;
        }

        await addDoc(collection(db, 'tarefas'), {
            tarefa: tarefainput,
            created: new Date(),
            userUid: user?.uid,
        })
        .then(() => {
            setTarefainput('')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    async function handleLogout(){
        await signOut(auth)
    }

    async function Delete(id){
        const docref = doc(db, 'tarefas', id)
        await deleteDoc(docref)
    }

    async function handleEdit(item){
        setTarefainput(item.tarefa)
        setEdit(item)
    }

    async function handleUpdateTarefa(){
        const docref = doc(db, 'tarefas', edit.id)
        await updateDoc(docref, {
            tarefa: tarefainput
        })
        .then(() => {
            console.log('Tarefa atualizada')
            setEdit({})
            setTarefainput('')
        })
        .catch((err) => {
            console.log(err)
            setEdit({})
            setTarefainput('')
        })
    }

    return(
        <div className="admin_container">

            <h1>Minhas tarefas</h1>

            <form className='form' onSubmit={handleRegister}>
                <textarea
                placeholder="Digite sua tarefa..."
                value={tarefainput}
                onChange={(e) => setTarefainput(e.target.value)}
                />
                {Object.keys(edit).length > 0 ? (
                    <button className='btn-register' style={{backgroundColor: '#6add39'}} type='submit'>Atualizar tarefa</button>
                ) : (
                    <button className='btn-register' type='submit'>Registar tarefa</button>
                )
                }
            </form>

            {
                tarefas.map((item) => (
                <article className='list' key={item.id}>
                    <p>{item.tarefa}</p>
                    <div>
                        <button onClick={() => handleEdit(item)}>Editar</button>
                        <button onClick={() => Delete(item.id)} className='btn-delete'>Excluir</button>
                    </div>
                </article>
                ))
            }

            <button className='btn-logout' onClick={handleLogout}>Sair</button>

        </div>
    )
}

export default Admin;
import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Form, Container, SubmitButton, List, DeleteItem } from "./style";

import api from '../../Services/api';

export default function Main(){

    const [newRepo, setNewRepo] = useState('')
    const [repo, setRepo] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        setLoading(true)
        try{
            async function Submit(){

                const response = await api.get(`repos/${newRepo}`);
                
                const data = {
                    name: response.data.full_name
                }
        
                setRepo([...repo, data])
                setNewRepo('')
            }
            Submit();
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }

    }, [newRepo, repo])


    function handleInputChange(e){
        setNewRepo(e.target.value)
    }

    const handleDelete = useCallback((item) => {
        const find = repo.filter( r => r.name !== item)
        setRepo(find)
    }, [repo])

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositorios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Adicionar repositorios"
                value={newRepo}
                onChange={handleInputChange}
                />

                <SubmitButton loading={loading ? 1 : 0}>
                    {
                        loading ? (
                            <FaSpinner size={15} color="#fff"/>
                        ) : (
                            <FaPlus size={15} color="#fff"/>
                        )
                    }
                </SubmitButton>
            </Form>

            <List>
                {repo.map((item) => (
                    <li key={item.name}>
                        <span>
                            <DeleteItem onClick={() => handleDelete(item.name)}>
                                <FaTrash size={15}/>
                            </DeleteItem>
                            {item.name}
                        </span>
                        <a href="">
                            <FaBars size={20}/>
                        </a>
                    </li>
                ))}
            </List>
        </Container>
    )
}
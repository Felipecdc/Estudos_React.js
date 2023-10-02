/*
*Este código foi criado para um estudo com base em
*criar alguns inputs de email, password e opção de sexo
*onde os valores podem ser alterados real time
*ao escrever ou escolher um option com uma função performatica
*/

import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            form:{
                nome: '',
                email: '',
                password: '',
                sexo: '',
                error: ''
            }
        }
        this.cadastrar = this.cadastrar.bind(this)
        this.dadosForm = this.dadosForm.bind(this)
    }

    cadastrar(event){
        const {nome, email, password} = this.state.form;

        if(nome !== '' && email !== '' && password !== ''){
            alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${password}`);
        }else{
            this.setState({error: 'Ops, parece que está faltando algo!'});
        }
        event.preventDefault(); 
    }

    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form})
    }

    render(){
        return(
            <div>
                <h2>Novo usuário</h2>

                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.cadastrar}>
                    <h3>Nome:</h3>
                    <input 
                    type='text'
                    name='nome'
                    value={this.state.form.nome} 
                    onChange={this.dadosForm} 
                    />

                    <h3>Email:</h3>
                    <input
                    type='email'
                    name='email'
                    value={this.state.form.email}
                    onChange={this.dadosForm}
                    />

                    <h3>Senha:</h3>
                    <input
                    type='password'
                    name='password'
                    value={this.state.form.password}
                    onChange={this.dadosForm}
                    />
                    <br/><br/>  

                    <h3>Sexo:</h3>
                    <select name='sexo' value={this.state.form.sexo} onChange={this.dadosForm}>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                    
                    <br/><br/>

                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default App;

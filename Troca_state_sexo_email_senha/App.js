/*
*Este código foi criado para um estudo com base em
*criar alguns inputs de email, password e opção de sexo
*onde os valores podem ser alterados real time
*ao escrever ou escolher um option
*/

import React, {Component} from 'react';
import Feed from './Components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            sexo: 'masculino'
        }

        this.trocaemail = this.trocaemail.bind(this)
        this.trocasexo = this.trocasexo.bind(this)
    }

    trocaemail = (e) => {
        let value = e.target.value;
        this.setState({email: value})
    }

    trocasexo = (e) => {
        let value = e.target.value;
        this.setState({sexo: value})
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Email:
                <br/>
                <br/>
                <input type='email' name='email' value={this.state.email} onChange={this.trocaemail}/>
                <br/>
                <br/>
                password:
                <br/>
                <input type='password' name='password' value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})}/>
                <br/>
                <br/>
                password:
                <br/>
                <select name='sexo' value={this.state.sexo} onChange={this.trocasexo}>
                    <option value='masculino'>masculino</option>
                    <option value='feminino'>feminino</option>
                </select>
                <br/>
            </div>
        )
    }
}

export default App;

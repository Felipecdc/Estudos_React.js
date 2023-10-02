/*
*Aplicação de biscoito da sorte para treinar imagens e
*renderização aleatória de frases com uma concatenação de " nas frase
*/

import React, {Component} from 'react';
import './styles.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: '',
        };

        this.frases = [
            'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ]; 

        this.quebraBiscoito = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
        let state = this.state;
        let numero = Math.floor(Math.random() * this.frases.length)
        state.textoFrase = '"' + this.frases[numero]+ '"'
        this.setState(state)
    }

    render(){
        return(
            <div className='container'>
                <img src={require('./Assets/biscoito.png')} className='img'/>
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className='textFrase'>{this.state.textoFrase}</h3>
            </div>
        )
    }
}

class Botao extends Component{ 
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>
                    {this.props.nome}
                </button>
            </div>
        )
    }
}

export default App;

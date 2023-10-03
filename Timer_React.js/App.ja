import React, {Component} from 'react';
import './styles.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'Start'
        }
        this.timer = null
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
    }

    start(){
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null;
            state.botao = 'Start'
        }else{
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100)
            state.botao = 'Stop'
        }
        this.setState(state)
    }

    stop(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state 
        state.numero = 0;
        state.botao = 'Start';
        this.setState(state)
    }

    render(){
        return(
            <div className='container'>
                <img src={require('./Assets/cronometro.png')} className='img'/>
                <a className='timer'>{this.state.numero.toFixed(1)}</a>
                <div className='areaBtn'>
                    <a className='botao' onClick={ this.start }>{this.state.botao}</a>
                    <a className='botao' onClick={ this.stop }>Clear</a>
                </div>
            </div>
        )
    }
}

export default App;

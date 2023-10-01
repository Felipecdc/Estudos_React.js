import React, {Component} from "react";

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>                
                <h3>{this.props.username}</h3>
                <a>
                    {this.props.curtidas>1?'Curtidas: ':'Curtida: '/*Formatando text*/} 
                    {this.props.curtidas /*Adicionando curtidas*/}
                    <br/> 
                    {this.props.comentarios>1?'Comentarios: ':'Comentario: '/*Formatando text*/ }
                    {this.props.comentarios}
                </a>
                <hr/>
            </div>
        )
    }
}

export default Feed;
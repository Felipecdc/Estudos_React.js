import React, {Component} from 'react';
import Feed from './Components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Felipe', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Juliana', curtidas: 128, comentarios: 58},
                {id: 3, username: 'Matheus', curtidas: 8, comentarios: 0},
                {id: 4, username: 'Ricardo', curtidas: 1, comentarios: 0},
            ]
        }
    }

    render(){
        return(
            <div>
                { 
                    this.state.feed.map((item, index) => {
                        return(
                            <Feed 
                            id={item.id} 
                            username={item.username} 
                            curtidas={item.curtidas}
                            comentarios={item.comentarios}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
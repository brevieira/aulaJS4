import React from 'react';

class Menuburguer extends React.Component{
    constructor(props){
        super(props);

    }
    games = (jogo) => {
        console.log(jogo)
        this.props.jogo(jogo);
    }
    ola = (mundo) => {
        console.log(mundo)
        this.setState({
            mundo :null,
        })
    }
    render (){
        return(
            <div>
                <h1 onClick={() => this.ola('ola mundo')}>&#9776;</h1>
                {this.props.jogos.map(jogo =>{
                    return (
                     <h1 onClick={() => this.games(jogo)}>{jogo}</h1>
                    )
                })}
            </div>
        )  
    }
}
export default Menuburguer;
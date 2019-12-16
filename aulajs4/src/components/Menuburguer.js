import React from 'react';

class Menuburguer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            aberto:false,
        }
    }
    games = (jogo) => {
        console.log(jogo)
        this.props.jogo(jogo);
    }
    abrefecha = (mundo) => {
        console.log(mundo)
        this.setState({
            aberto :!this.state.aberto,
        })
    }
    render (){
        return(
            <div className="menu">
                <h1 className="Bmenu" onClick={() => this.abrefecha('ola mundo')}>&#9776;</h1>
                {this.state.aberto && this.props.jogos.map(jogo =>{
                    return (
                     <h1 onClick={() => this.games(jogo)}>{jogo}</h1>
                    )
                })}
            </div>
        )  
    }
}
export default Menuburguer;
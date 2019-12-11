import React from 'react';

class Menuburguer extends React.Component{
    constructor(props){
        super(props);
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
                {this.props.jogos.map(jogos =>{
                    return (
                     <h1>{jogos}</h1>
                    )
                })}
            </div>
        )  
    }
}
export default Menuburguer;
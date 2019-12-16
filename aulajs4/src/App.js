import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menuburguer from './components/Menuburguer';
import RDR2 from './components/RDR2';
import Gta from './components/gta';
import COD from './components/COD';
import GOW from './components/GOW';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      jogos: [
        'Cod',
        'Gow',
        'Gta',
        'Rdr2',
      ],
      selecionado: '',
    }
  }
  games = (jogo) => {
    this.setState({
      selecionado: jogo ,
    })
  }
  Jg = () =>{
    switch(this.state.selecionado) {
      case 'Cod':
        return <COD/>
      case 'Gow':
        return <GOW/>
      case 'Gta':
        return <Gta/>
      case 'Rdr2':
        return <RDR2/>
    }
  }
  render (){
      return(
         <div className="tela">

            <div>
              <Menuburguer 
              jogos ={this.state.jogos}
              jogo ={this.games}/>
            </div>
            <div className="imagens">
              {this.Jg()}
            </div>

         </div>
      )  
  }
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menuburguer from './components/Menuburguer';
import RDR2 from './components/RDR2';
import gta from './components/gta';
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

  render (){
      return(
         <div className="menu">
           <Menuburguer jogos ={this.state.jogos}/>
         </div>
      )  
  }
}

export default App;

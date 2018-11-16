import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './commons/header/Header.js';
import HeaderSeccion from './commons/header/HeaderSeccion';
import FooterSeccion from './commons/footer/FooterSeccion.js';
import Proyecto from './proyecto/Proyecto.js';

class App extends Component {

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <main className="main" >
        <Header></Header>
        <section className="content content--full">
            <Proyecto></Proyecto>
          <FooterSeccion></FooterSeccion>
        </section>
      </main>
    );
  }
}
//             /*<!-- <HeaderSeccion></HeaderSeccion>-->*/
export default App;

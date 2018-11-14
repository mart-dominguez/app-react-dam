import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './commons/header/Header.js';
import HeaderSeccion from './commons/header/HeaderSeccion';
import FooterSeccion from './commons/footer/FooterSeccion.js';

class App extends Component {
  render() {
    return (
      <main className="main" >
        <Header></Header>
        <section className="content content--full">
        <HeaderSeccion></HeaderSeccion>
        <h1>HOLA MARtIN</h1>
        <FooterSeccion></FooterSeccion>
        </section>
      </main>
    );
  }
}

export default App;

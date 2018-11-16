import React, {
  Component
} from 'react';
import TituloForm from '../commons/form/TituloForm.js'
import SubtituloForm from '../commons/form/SubtituloForm.js'
import HeaderForm from '../commons/form/HeaderForm.js'
import FilaFormInput from '../commons/form/FilaFormInput.js'
import FilaFormBoton from '../commons/form/FilaFormBoton.js'

const proyectoVacio =  {
  titulo:"",
  horas:0
};

class Proyecto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       proyectoActual:proyectoVacio,
       listaProyectos:[]
    };
    this.crearProyecto = this.crearProyecto.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(name,value) {
    this.setState(prevState => ({
      proyectoActual: {
            ...prevState.proyectoActual,
            [name]: value
        }
    }))
  }

  crearProyecto(){
    // como es asyn meto el console log de la lista en el setstate
    console.log(this.state.proyectoActual);
    let proyectoNuevo = JSON.parse(JSON.stringify(this.state.proyectoActual));
    this.setState(prevState => ({
      listaProyectos: [...prevState.listaProyectos, proyectoNuevo],
      proyectoActual:proyectoVacio
    }), () => { 
      console.log(this.state.listaProyectos);
  });
    
  }

  render() {
    return ( 
        <div className="card">
          <div className="card-body">
            <TituloForm titulo = "Datos del proyecto" > </TituloForm> 
            <SubtituloForm subtitulo = "Ingrese la informacion del proyecto"> </SubtituloForm> 
            <form className="row">
              <FilaFormInput id="titulo" tipo="text" valor={this.state.proyectoActual.titulo} actualizar={this.handleInputChange}></FilaFormInput> 
              <FilaFormInput id="horas" tipo="number" valor={this.state.proyectoActual.horas} actualizar={this.handleInputChange}></FilaFormInput> 
              <FilaFormBoton accion={this.crearProyecto}></FilaFormBoton>
            </form> 
          </div>
        </div>
    );
  }
}

export default Proyecto;